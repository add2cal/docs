# API

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

## Methods

The API accepts the methods GET, POST, PATCH, and DELETE.  
For updates, you can also use PUT. This is automatically converted to PATCH and should therefore only be understood as a workaround if a PATCH method is not possible in your setup.
