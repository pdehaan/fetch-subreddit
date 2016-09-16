const fetch = require('node-fetch');

module.exports = {
  fetchSubreddit,
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

  subreddits = subreddits.map(_fetchSubreddit);
  return Promise.all(subreddits)
    .then(_flatten);
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
    .then((res) => res.data.children)
    .then((urls) => urls.reduce(reducer, []))
    .then((urls) => ({[subreddit]: urls}));
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
 * Internal method to merge two objects.
 * @private
 * @param  {Array} data Array to reduce.
 * @return {Object} An Object containing the merged array elements.
 */
function _flatten(data) {
  return data.reduce((prev, curr) => {
    for (let key in curr) {
      prev[key] = curr[key];
    }
    return prev;
  }, {});
}
