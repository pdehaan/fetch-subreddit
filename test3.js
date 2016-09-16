const urlParse = require('url').parse;

const { fetchSubreddit, fetchRandomSubredditName, pretty } = require('./index');

// Fetch 2 random subreddits via /r/random, then grab each subreddits's JSON feed.
fetchRandomSubredditName(2)
  .then((subreddits) => fetchSubreddit(subreddits.map(({name}) => name)))
  .then((subreddits) => subreddits.map(({subreddit, urls}) => {
    // Run a reducer on the fetched URLs and group by hostname.
    return {
      subreddit,
      urls: urls.reduce((prev, curr) => {
        const hostname = urlParse(curr).hostname;
        prev[hostname] = prev[hostname] || 0;
        prev[hostname] += 1;
        return prev;
      }, {})
    };
  }))
  .then((subreddits) => pretty(subreddits))
  .then((output) => console.log(output))
  .catch((err) => console.error(err));

/** OUTPUT:

  [
    {
      "subreddit": "pokemonshowdown",
      "urls": {
        "www.reddit.com": 5,
        "replay.pokemonshowdown.com": 21
      }
    },
    {
      "subreddit": "beer",
      "urls": {
        "goodbeerhunting.com": 2,
        "www.liveleak.com": 1,
        "www.westword.com": 1,
        "www.pastemagazine.com": 1,
        "www.youtube.com": 2,
        "thebolditalic.com": 1,
        "tenemu.com": 1,
        "www.reddit.com": 8,
        "www.telegram.com": 1,
        "www.nuvo.net": 1,
        "twitter.com": 1,
        "brewedculture.org": 1,
        "craftconscious.co": 1,
        "www.beernloathing.com": 1,
        "sfist.com": 1,
        "www.analogagogo.com": 1
      }
    }
  ]

 */
