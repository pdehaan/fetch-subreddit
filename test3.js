const urlParse = require('url').parse;

const { fetchSubreddit, fetchRandomSubredditName, pretty } = require('./index');

// Fetch 2 random subreddits via /r/random, then grab each subreddits's JSON feed.
fetchRandomSubredditName(2)
  // Pluck out just the `name` property from each subreddit.
  .then((subreddits) => subreddits.map(({name}) => name))
  // Fetch each subreddit's JSON feed.
  .then((subreddits) => fetchSubreddit(subreddits))
  // Run a reducer on the fetched URLs and group by hostname.
  .then((subreddits) => subreddits.map(({subreddit, urls}) => {
    return {
      subreddit,
      urls: urls.reduce(_subredditReducer, {})
    };
  }))
  // Optional: Reduce all subreddits into a single object.
  .then((subreddits) => subreddits.reduce(_summaryReducer, {}))
  .then((subreddits) => pretty(subreddits))
  .then((output) => console.log(output))
  .catch((err) => console.error(err));

function _subredditReducer(prev, curr) {
  const hostname = urlParse(curr).hostname;
  prev[hostname] = prev[hostname] || 0;
  prev[hostname] += 1;
  return prev;
}

function _summaryReducer(prev, {urls}) {
  Object.keys(urls).forEach((hostname) => {
    prev[hostname] = prev[hostname] || 0;
    prev[hostname] += urls[hostname];
  });
  return prev;
}

/** OUTPUT:

  [
    {
      "subreddit": "Disney_Infinity",
      "urls": {
        "www.reddit.com": 17,
        "imgur.com": 9,
        "www.ign.com": 1
      }
    },
    {
      "subreddit": "AlienBlue",
      "urls": {
        "www.reddit.com": 25,
        "i.reddituploads.com": 1
      }
    }
  ]

Or, if you run the optional extra reducer above, all the subreddits are merged into a single object with combined counts:

  {
    "www.reddit.com": 42,
    "imgur.com": 9,
    "www.ign.com": 1,
    "i.reddituploads.com": 1
  }

 */
