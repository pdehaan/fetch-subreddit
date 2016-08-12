const fetch = require('node-fetch');
const sortjson = require('sort-json');

const PROXY_URL = process.env.METADATA_PROXY || 'https://metadata.dev.mozaws.net/v1/metadata';

module.exports = {
  PROXY_URL,
  fetchSubreddit,
  fetchMetadata
};

function fetchSubreddit(subreddit) {
  const reducer = (prev, {data: {url}}) => prev.push(url) && prev;
  return fetch(`https://www.reddit.com/r/${subreddit}/.json`)
    .then((res) => res.json())
    .then(({data: {children}}) => children)
    .then((urls) => urls.reduce(reducer, []))
    .then((urls) => ({subreddit, urls}));
}

function fetchMetadata(urls) {
  const opts = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({urls})
  };

  return fetch(PROXY_URL, opts)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw new Error(res.error);
      }
      return sortjson(res.urls);
    });
}
