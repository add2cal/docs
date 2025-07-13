import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getAllMdFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllMdFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function parseFrontmatter(content) {
  const lines = content.split('\n');
  if (lines[0] !== '---') {
    return null;
  }
  
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      endIndex = i;
      break;
    }
  }
  
  if (endIndex === -1) {
    return null;
  }
  
  const frontmatterLines = lines.slice(1, endIndex);
  const frontmatter = {};
  
  frontmatterLines.forEach(line => {
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (match) {
      frontmatter[match[1].trim()] = match[2].trim();
    }
  });
  
  // Get the first h1
  const contentLines = lines.slice(endIndex + 1);
  let firstH1 = null;
  for (let line of contentLines) {
    const h1Match = line.match(/^#\s+(.+)$/);
    if (h1Match) {
      firstH1 = h1Match[1].trim();
      break;
    }
  }
  
  return { frontmatter, firstH1 };
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = parseFrontmatter(content);
  
  if (!parsed) {
    return {
      file: filePath,
      hasTitle: false,
      hasDescription: false,
      titleMatchesH1: false,
      descriptionLength: 0,
      issues: ['No frontmatter found']
    };
  }
  
  const { frontmatter, firstH1 } = parsed;
  const hasTitle = !!frontmatter.title;
  const hasDescription = !!frontmatter.description;
  const descriptionLength = frontmatter.description ? frontmatter.description.length : 0;
  const titleMatchesH1 = hasTitle && firstH1 ? frontmatter.title === firstH1 : false;
  
  const issues = [];
  if (!hasTitle) issues.push('Missing title');
  if (!hasDescription) issues.push('Missing description');
  if (hasDescription && descriptionLength > 150) issues.push(`Description too long (${descriptionLength} chars)`);
  if (hasTitle && firstH1 && !titleMatchesH1) issues.push(`Title "${frontmatter.title}" doesn't match H1 "${firstH1}"`);
  if (!firstH1) issues.push('No H1 found');
  
  return {
    file: filePath,
    hasTitle,
    hasDescription,
    titleMatchesH1,
    descriptionLength,
    title: frontmatter.title,
    description: frontmatter.description,
    firstH1,
    issues
  };
}

// Get all markdown files
const srcDir = path.join(__dirname, 'src');
const mdFiles = getAllMdFiles(srcDir);

console.log('=== FRONTMATTER CHECK RESULTS ===\n');

const results = mdFiles.map(checkFile);
const problematicFiles = results.filter(r => r.issues.length > 0);

console.log(`Total files checked: ${results.length}`);
console.log(`Files with issues: ${problematicFiles.length}`);
console.log('\n=== FILES WITH ISSUES ===\n');

problematicFiles.forEach(result => {
  console.log(`📄 ${result.file.replace(__dirname + '/src/', '')}`);
  console.log(`   Issues: ${result.issues.join(', ')}`);
  if (result.title) console.log(`   Title: "${result.title}"`);
  if (result.description) console.log(`   Description: "${result.description}" (${result.descriptionLength} chars)`);
  if (result.firstH1) console.log(`   First H1: "${result.firstH1}"`);
  console.log('');
});

console.log('\n=== SUMMARY BY ISSUE TYPE ===\n');
const issueTypes = {};
problematicFiles.forEach(result => {
  result.issues.forEach(issue => {
    issueTypes[issue] = (issueTypes[issue] || 0) + 1;
  });
});

Object.entries(issueTypes).forEach(([issue, count]) => {
  console.log(`${issue}: ${count} files`);
});
