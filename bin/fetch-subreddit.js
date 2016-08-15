#!/usr/bin/env node

const yargs = require('yargs');
const {fetchSubreddit, pretty} = require('../index');

const argv = yargs.usage('$0 {subreddit} [{subreddit}]')
  .demand(1, 'must provide a valid command')
  .help('h')
  .alias('h', 'help')
  .argv;

const subreddits = argv._;

fetchSubreddit(subreddits)
  .then((data) => console.log(pretty(data)))
  .catch((err) => console.error(err));
