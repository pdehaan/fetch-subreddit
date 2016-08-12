# fetch-subreddit

Fetch a Reddit subreddit as JSON.

## Installation:

This isn't published on npm, so install directly from GitHub:

```sh
$ npm i pdehaan/fetch-subreddit -S
```

## Usage:

```js
const {fetchMetadata, fetchSubreddit} = require('fetch-subreddit');

fetchSubreddit('worldnews')
  .then(({urls}) => fetchMetadata(urls))
  .then((urls) => console.log(pretty(urls)))
  .catch((err) => console.error(err));

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}
```
