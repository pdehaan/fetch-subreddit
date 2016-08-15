#!/usr/bin/env node

const yargs = require('yargs');
const {fetchSubreddit} = require('../index');

const argv = yargs.usage('$0 {subreddit} [{subreddit}]')
  .demand(1, 'must provide a valid command')
  .help('h')
  .alias('h', 'help')
  .argv;

const subreddits = argv._.map(fetchSubreddit);

Promise.all(subreddits)
  .then(flatten)
  .then((data) => console.log(pretty(data)))
  .catch((err) => console.error(err));

function flatten(data) {
  return data.reduce((prev, curr) => {
    Object.keys(curr).forEach((key) => prev[key] = curr[key]);
    return prev;
  }, {});
}

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}
