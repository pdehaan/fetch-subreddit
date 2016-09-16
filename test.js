const { fetchSubreddit, fetchRandomSubredditName, fetchRandomNSFWSubredditName, pretty } = require('./index');

fetchSubreddit(['worldnews', 'sports'])
  .then((urls) => pretty(urls))
  .then((urls) => console.log(urls))
  .catch((err) => console.error(err));

/** OUTPUT:

  [
    {
      "subreddit": "worldnews",
      "urls": [
        "http://www.mirror.co.uk/news/world-news/north-korea-begs-world-aid-8847251",
        ...
        "http://www.bbc.com/news/world-asia-china-37370201"
      ]
    },
    {
      "subreddit": "sports",
      "urls": [
        "http://i.imgur.com/ZP2Xgbf.jpg",
        ...
        "http://www.bbc.com/sport/cycling/37371057"
      ]
    }
  ]

 */

/** ---------- ---------- ---------- ---------- ---------- ---------- ---------- */

fetchRandomSubredditName(2)
  .then((res) => pretty(res))
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/** OUTPUT:

  [
    {
      "json": "https://www.reddit.com/r/titanfall/.json",
      "name": "titanfall",
      "url": "https://www.reddit.com/r/titanfall/"
    },
    {
      "json": "https://www.reddit.com/r/Gunpla/.json",
      "name": "Gunpla",
      "url": "https://www.reddit.com/r/Gunpla/"
    }
  ]

 */

/** ---------- ---------- ---------- ---------- ---------- ---------- ---------- */

// fetchRandomNSFWSubredditName()
//   .then((res) => pretty(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
