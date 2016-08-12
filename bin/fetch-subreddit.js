#!/usr/bin/env node

const yargs = require('yargs');
const {fetchMetadata, fetchSubreddit} = require('../index');

const argv = yargs.usage('$0 {subreddit}')
  .demand(1, 'must provide a valid command')
  .help('h')
  .alias('h', 'help')
  .argv;

const subreddit = argv._[0];

fetchSubreddit(subreddit)
  .then(({urls}) => fetchMetadata(urls))
  .then((urls) => console.log(pretty(urls)))
  .catch((err) => console.error(err));

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}
