---
title: API Overview
description: Explore Add to Calendar PRO's REST API for seamless integration of calendar buttons, ics files, event pages, and RSVP management.
---

# API Overview

We offer a simple REST API to create and read elements.

## URL

The base url is:

```
https://api.add-to-calendar-pro.com/v1
```

All following call schemes assume this base to be prepended.

## Rate Limiting

The API is rate limited at 80 requests per second.  
If this does not work for your, please contact us and tell us about your case.

## GET Limit

When reading multiple items at once (using the `all` endpoint or with RSVP answers), the number of items returned is limited.

You will receive a maximum of 2,000 RSVP answers at once. For all other elements, the limit is 800.

Use the query param `page` to get more (if applicable). Like with `?page=2` to get events 801-1,600.

## Methods

The API accepts the methods GET, POST, PATCH, and DELETE.  
For updates, you can also use PUT. This is automatically converted to PATCH and should therefore only be understood as a workaround if a PATCH method is not possible in your setup.
