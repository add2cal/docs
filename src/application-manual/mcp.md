---
title: Connect an AI Assistant with MCP
description: Connect an MCP-compatible AI assistant to Add to Calendar PRO securely and understand what it can access.
outline: [2,3]
---

# Connect an AI Assistant with MCP

The Model Context Protocol (MCP) lets compatible AI assistants and developer tools work with your Add to Calendar PRO data. They can inspect your setup, help create or update events, and answer questions using the Add to Calendar PRO documentation.

The MCP server URL is:

```text
https://add-to-calendar-pro.com/mcp
```

Use this exact lowercase address. The server uses OAuth, so you do not paste your API key into the AI assistant.

## Before you connect

You need:

- an MCP client that supports remote HTTP servers and OAuth;
- an active Add to Calendar PRO API key; and
- **Read** permission for inspecting data, or **Read & Write** permission if the assistant should create, change, or delete data.

Create a dedicated key under [Settings → API Keys](https://app.add-to-calendar-pro.com/settings). Give it only the permissions the assistant needs and set an expiration date where practical. The OAuth connection validates the key by reading your groups, so a write-only key is not sufficient.

## Connect your MCP client

The labels differ between clients, but the connection follows the same steps:

1. Open the client's settings for MCP servers, integrations, or connectors.
2. Add a remote MCP server and enter `https://add-to-calendar-pro.com/mcp` as its URL. You can use **Add to Calendar PRO** as the display name.
3. If the client asks for an OAuth client ID or client secret, leave those fields empty. Compatible clients register automatically.
4. Start the connection or authorization flow. Your browser opens an authorization page hosted on `add-to-calendar-pro.com`.
5. Check the client name and redirect destination shown on that page. Enter your dedicated Add to Calendar PRO API key and authorize the connection.
6. Return to the client when prompted. It should now list the Add to Calendar PRO tools.
7. Test the connection with a read-only request, such as “List my event groups” or “Show my latest event.”

Do not enter the API key in the MCP server URL, an HTTP header field, a chat message, or the MCP client's own secret field. The key belongs only in the Add to Calendar PRO authorization form.

## How the connection protects your API key

The authorization form sends the API key directly to Add to Calendar PRO. After validation, it is encrypted in the OAuth grant and used server-side when an MCP tool calls the API. The MCP client receives OAuth tokens, not the API key.

The API key is not returned to the client, included in tool results, logged, or cached by the MCP server. The assistant can still act with the permissions of that key, so use a dedicated, restricted key and review write or delete operations before approving them.

To end access, disconnect the server in your MCP client and revoke or delete the dedicated API key under **Settings → API Keys**. Revoking the key prevents further API operations even if the client still has an OAuth token.

## What an assistant can do

The MCP server exposes 54 defined API operations as individual tools. With the required API-key permission, an assistant can:

- list, inspect, create, update, and delete event groups and events;
- list, inspect, create, update, and delete styles, RSVP templates, CTA templates, landing-page templates, and webhooks;
- filter event lists, retrieve generated ICS content, and upload landing-page images;
- read event views, saves, and RSVP statistics;
- list RSVP answers and inspect the latest answers;
- list email templates and custom domains; and
- search and read this documentation or evaluate which Add to Calendar PRO approach fits a use case.

These tools cover almost everything needed for working with events and the resources connected to them. The assistant receives each tool's expected fields and warnings, but the [API reference](/api/introduction) remains the source of truth for supported values and behavior.

Creating, updating, and deleting resources requires a key with write permission. Deletes can permanently remove data or disconnect linked functionality. For example, deleting a group also deletes its events. Ask the assistant to explain a proposed destructive action before it runs the tool.

## Current limitations

MCP does not provide tools to:

- manage users, team members, invitations, account security, or login methods;
- change organization details, plans, billing, or subscriptions;
- create, rotate, or delete API keys;
- create, update, or delete email templates;
- change RSVP answers or custom-domain configuration; or
- call arbitrary API paths that do not have a defined MCP tool.

The connection does not bypass your plan, API limits, resource permissions, or API-key scope. An AI assistant can also misunderstand a request. Review IDs, dates, linked templates, and proposed changes before allowing write or delete operations.

## Troubleshooting

### The authorization page does not open

Confirm that the server URL is exactly `https://add-to-calendar-pro.com/mcp`, without `/oauth` or an uppercase path. Remove any manually entered OAuth client ID or secret. The client must support remote MCP servers, OAuth, and dynamic client registration.

### The API key is rejected

Check that the key is active, has not expired, and includes read permission. Create a fresh dedicated key under **Settings → API Keys** if needed. Do not use your account password.

### Reading works, but changes fail

The key probably has read-only permission. Replace it with a dedicated **Read & Write** key, reconnect the MCP server, and complete authorization again.

### The client remains connected after a key change

Disconnect the MCP server in the client, revoke the old API key, and authorize a new connection. If the client offers a separate action to clear stored OAuth authorization, use that before reconnecting.
