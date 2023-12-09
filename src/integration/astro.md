
# Using Buttons and Forms with Astro

## Step 0: Pick a solution

For static site generators (SSG), we generally recommend to load the Add to Calendar Button script via CDN.

Alternatively, you can still use the npm package and include the module via an observer function.

We will highlight all options below.

## Step 1: Setup

### Option A: Integrate via CDN

Load the respective script by adding the following script tag to the head section of your website.

The script will be loaded in a non-blocking way. So you don't need to worry about where to include it exactly.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
```

### Option B: npm installation

Alternatively, install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

...and setup an Observer to load the script properly:

```html
<script type="module" hoist>
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.disconnect();
      import('../../node_modules/add-to-calendar-button/dist/module/index.js');
    }
  });
  const instances = document.querySelectorAll('add-to-calendar-button');
  for (const instance of instances) observer.observe(instance);
</script>
```

## Step 2: Use it

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event">` tag to your source code.
