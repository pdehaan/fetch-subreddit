const fetch = require('node-fetch');
const sortjson = require('sort-json');

module.exports = {
  fetchSubreddit
};

function fetchSubreddit(subreddit) {
  const reducer = (prev, {data: {url}}) => prev.push(url) && prev;
  return fetch(`https://www.reddit.com/r/${subreddit}/.json`)
    .then((res) => res.json())
    .then(({data: {children}}) => children)
    .then((urls) => urls.reduce(reducer, []))
    .then((urls) => ({[subreddit]: urls}));
}
