
# Troubleshooting

## My IDE throws TypeScript warnings

This can happen in rare cases, where types got not yet loaded. Sometimes it takes a restart of the IDE or the computer.

If the issue is still present, you can set the [skipLibCheck](https://www.typescriptlang.org/tsconfig#skipLibCheck) in your `tsconfig` to `false`, which should disable it.
Please also open a new issue at our GitHub repo ["add-to-calendar-button"](https://github.com/add2cal/add-to-calendar-button/issues/new/choose) or send us an email, so we can have a check too.


## Social preview image not updating

When sharing a link to the landingpage, we automatically generate a preview image, which displays the event details. This helps to spread the word more prominently.

At each update, this image gets updated as well. However, external tools and websites usually cache this image, which makes it not updating immediately. Some refresh there cache only after 7 days, if at all.

Even doing everything possible from our side (like completely changing the image url each time), we have no direct control over those external services and platforms.

_What you can do in those cases:_

* **Facebook/Meta**: Go to the Facebook debugger at [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) and enter the url you are sharing. If you see the old information, you can click the "scrape again" button and it should update.
* **X/Twitter**: X does not offer an option to manually refresh. Instead, you can add a query parameter to you url. This way, X thinks it's a new one and crawls again. Simply add something like `?i=1` at the end of your url. You can change the number multiple times to force a refresh.
