const fetch = require('node-fetch');

module.exports = {
  fetchRandomSubredditName,
  fetchRandomNSFWSubredditName,
  fetchSubreddit,
  getSubredditName,
  pretty
};

/**
 * Get a subreddit's links by subreddit name (or array of subreddit names).
 *
 * @param  {String|Array} subreddits Subreddit name or array of subreddit names.
 * @return {Object} An Object containing subreddit names and nested submission links.
 */
function fetchSubreddit(subreddits) {
  if (!Array.isArray(subreddits)) {
    subreddits = [subreddits];
  }

  return Promise.all(subreddits.map(_fetchSubreddit));
}

/**
 * Internal method to fetch the JSON feed and extract the URLs.
 * @private
 * @param  {String} subreddit Subreddit name to fetch JSON feed for.
 * @return {Object} An object containing the subreddit name as a key, and links as a nested array.
 */
function _fetchSubreddit(subreddit) {
  const reducer = (prev, {data: {url}}) => prev.push(url) && prev;
  const jsonUri = `https://www.reddit.com/r/${subreddit}/.json`;
  return fetch(jsonUri)
    .then((res) => res.json())
    .then((res) => res.data.children.reduce(reducer, []))
    .then((urls) => ({subreddit, urls}));
}

/**
 * Convenience wrapper for `JSON.stringify()`.
 * @param  {Object} obj Object to stringify.
 * @return {String}     Stringified object.
 */
function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}

/**
 * Fetches `count` number of "safe for work" subreddits.
 *
 * @param  {Number} count The number of random subreddits to fetch. Default: 1
 * @return {Array}        Array of subreddit `name` and `url`s.
 */
function fetchRandomSubredditName(count=1) {
  return _fetchRandomSubreddit(count, 'random');
}

/**
 * Fetches `count` number of "NOT safe for work" subreddits.
 * NOTE: This is a separate API just to avoid accidental work porn.
 *
 * @param  {Number} count The number of random subreddits to fetch. Default: 1
 * @return {Array}        Array of subreddit `name` and `url`s.
 */
function fetchRandomNSFWSubredditName(count=1) {
  // https://github.com/bitinn/node-fetch/issues/49
  const fetchOpts = {
    credentials: 'include',
    headers: {
      Cookie: 'over18=1;'
    }
  };

  return _fetchRandomSubreddit(count, 'randnsfw', fetchOpts);
}

/**
 * Proxy method that creates an array of subreddit promises to fetch.
 *
 * @private
 * @param  {Number} count     The number of random subreddits to fetch. Default: 1
 * @param  {String} subreddit Random subreddit generator. Either "random' or "randnsfw" (depending on if yuo want NSFW results). Default: "random" (safe for work)
 * @param  {Object} fetchOpts Options to pass to the `fetch()` method. Default: `{}`
 * @return {Array}            Array of subreddit `name` and `url`s.
 */
function _fetchRandomSubreddit(count=1, subreddit='random', fetchOpts={}) {
  const _fetchSubredditUrl = (subreddit, fetchOpts) => {
    return fetch(`https://www.reddit.com/r/${subreddit}`, fetchOpts)
      .then(({url}) => {
        return {
          json: `${url}.json`,
          name: getSubredditName(url),
          url
        };
      });
    };
  const promises = [...Array(count)]
    .map(() => _fetchSubredditUrl(subreddit, fetchOpts));

  return Promise.all(promises);
}

/**
 * Extracts a subreddit name from a URL using sketchy RegExp.
 *
 * @param  {String} url A fully qualified URL.
 * @return {String}     The name of a subreddit. For example: "knitting"
 */
function getSubredditName(url) {
  try {
    // This will throw a `TypeError: Cannot read property 'Symbol(Symbol.iterator)' of null` if the RegExp fails.
    const [input, name] = new RegExp('^https?://(?:www.)?reddit.com/r/(.*?)/?$').exec(url);
    return name;
  } catch (err) {
    return null;
  }
}



