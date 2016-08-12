const {fetchMetadata, fetchSubreddit} = require('./index');

fetchSubreddit('worldnews')
  .then(({urls}) => fetchMetadata(urls))
  .then((urls) => console.log(pretty(urls)))
  .catch((err) => console.error(err));

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}
