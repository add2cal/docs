
# Troubleshooting

## Social preview image not updating

When sharing a link to the landingpage, we automatically generate a preview image, which displays the event details. This helps to spread the word more prominently.

At each update, this image gets updated as well. However, external tools and websites usually cache this image, which makes it not updating immediately. Some refresh there cache only after 7 days, if at all.

Even doing everything possible from our side (like completely changing the image url each time), we have no direct control over those external services and platforms.

_What you can do in those cases:_

* **Facebook/Meta**: Go to the Facebook debugger at [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) and enter the url you are sharing. If you see the old information, you can click the "scrape again" button and it should update.
* **X/Twitter**: X does not offer an option to manually refresh. Instead, you can add a query parameter to you url. This way, X thinks it's a new one and crawls again. Simply add something like `?i=1` at the end of your url. You can change the number multiple times to force a refresh.
