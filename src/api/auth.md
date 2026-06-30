---
title: API Authentication
description: Learn to authenticate with Add to Calendar PRO API keys. Generate and use API keys for secure access to the calendar integration service.
---

# API Authentication

In order to authenticate your calls, you will first need to create an API key at your organization settings in the application.

## Usage

Use this key for every request with the Header `Authorization`.

<br />


**Example:**

```
Authorization: a4bac3b2-aaaa-4bc3-9c44-0e198b9aaa74
```

---

<br />

## Scoping

When creating a new API key, you have the option to set:

- the scope (Read, Write, Read & Write)
- an expiration date

The default scope would be "Read" only. Usually, you would want to set "Read & Write".
It is recommended to have 1 key per application/system you are connecting to. Keep the scope as limited as possible. A "Write" key, which gets exposed can lead to attackers deleting all your data!

The expiration date would deactivate your key after a given date. This can be helpful to make sure that if you forget about a key, it becomes useless anyway after some months.

Both setting can only be applied on creation. If you want to change them later, you would need to create a new key.