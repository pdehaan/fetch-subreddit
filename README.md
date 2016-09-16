# fetch-subreddit

Fetch a Reddit subreddit as JSON.
Also allows you to grab random subreddits using `fetchRandomSubredditName()` (via /r/random), or `fetchRandomNSFWSubredditName()` (via /r/randnswf).

## Installation:

```sh
$ npm i fetch-subreddit -S
```

## API:

### `fetchSubreddit(subreddits:String|Array):Array`

Get a subreddit's links by subreddit name (or array of subreddit names).

```js
function fetchSubreddit(subreddits) {...}
```

### `fetchRandomSubredditName(count:Number):Array`

Fetches `count` number of "safe for work" subreddits.

```js
function fetchRandomSubredditName(count=1) {...}
```


### `fetchRandomNSFWSubredditName(count:Number):Array`

Fetches `count` number of "NOT safe for work" subreddits.

**NOTE:** This is a separate API just to avoid accidental work porn.

```js
function fetchRandomNSFWSubredditName(count=1) {...}
```

### `getSubredditName(url:String):String {`

Extracts a subreddit name from a URL using sketchy RegExp.

```js
function getSubredditName(url) {...}
```


## Usage:

```js
const {fetchSubreddit} = require('fetch-subreddit');

fetchSubreddit('worldnews')
  .then((urls) => console.log(pretty(urls)))
  .catch((err) => console.error(err));

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}
```

Or, if you want to roll the dice on a couple random subreddits:

```js
const { fetchSubreddit, fetchRandomSubredditName } = require('fetch-subreddit');

// Fetch 2 random subreddits via /r/random, then grab each subreddits's JSON feed.
fetchRandomSubredditName(2)
  .then((res) => res.map(({name}) => name))
  .then((subreddits) => fetchSubreddit(subreddits))
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

### Sample output:

```json
[
  {
    "subreddit": "worldnews",
    "urls": [
      "http://www.independent.co.uk/news/business/news/apple-tax-japan-penalty-iphone-maker-forced-to-pay-fine-a7310846.html",
      "http://www.mirror.co.uk/news/world-news/north-korea-begs-world-aid-8847251",
      "http://www.deccanchronicle.com/world/america/160916/rescued-isis-sex-slave-nadia-murad-made-un-goodwill-ambassador.html",
      "http://www.euronews.com/2016/09/15/bruges-beer-pipeline-becomes-reality",
      "http://www.hurriyetdailynews.com/young-woman-assaulted-on-public-bus-in-istanbul-for-wearing-shorts-.aspx?PageID=238&amp;NID=103947&amp;NewsCatID=341",
      "https://www.theguardian.com/world/2016/sep/16/third-of-saudi-airstrikes-on-yemen-have-hit-civilian-sites-data-shows",
      "http://www.bbc.com/news/uk-37380673",
      "https://www.theguardian.com/business/2016/sep/16/bp-modelling-great-australian-bight-oil-spill-new-south-wales",
      "http://www.independent.co.uk/news/world/asia/pakistan-mosque-bombing-latest-mohmand-agency-killed-suicide-blast-friday-prayers-claim-a7310986.html",
      "http://www.bbc.com/news/world-europe-37385989",
      "https://www.algemeiner.com/2016/09/15/the-boys-in-tehran-know-israel-has-200-nukes-pointed-at-them-says-former-secretary-of-state-colin-powell-in-leaked-email/",
      "http://www.dailymail.co.uk/news/article-3790116/Mexico-wants-build-border-wall-Central-America-illegal-immigrants.html",
      "http://www.independent.co.uk/news/world/middle-east/egyptian-911-inside-job-state-media-war-on-terror-isis-made-up-al-ahram-noha-al-sharnoubi-columnist-a7308926.html?cmpid=facebook-post",
      "http://www.dw.com/en/german-publican-challenges-niqab-wearer/a-19553623",
      "http://www.independent.ie/world-news/europe/un-warns-that-235000-refugees-waiting-in-libya-to-cross-to-italy-35053194.html",
      "http://www.independent.co.uk/news/world/americas/child-sex-sting-nets-22-suspects-including-methodist-pastor-who-volunteered-in-schools-a7311576.html",
      "https://www.theguardian.com/uk-news/2016/sep/16/torrential-rain-travel-chaos-england-floods",
      "https://www.thestar.com/news/world/2016/09/14/15-billion-birds-missing-from-north-american-skies-alarming-report-finds.html",
      "http://www.nationalobserver.com/2016/09/14/news/embrace-change-un-environment-boss-tells-canadas-oil-industry",
      "https://www.theguardian.com/society/2016/sep/15/stephen-hawking-robert-winston-inquiry-jeremy-hunt-nhs-weekend-patient-deaths",
      "http://www.dailydot.com/layer8/julian-assange-obama-chelsea-manning/",
      "http://www.middleeasteye.net/news/syria-us-fsa-threats-1094894190",
      "http://www.bbc.com/news/world-asia-china-37370201",
      "http://www.mirror.co.uk/news/weird-news/notorious-runaway-robot-escaped-lab-8846563",
      "http://www.dw.com/en/muslim-fashion-shops-in-germany-linked-to-extremist-salafists/a-19554871"
    ]
  },
  {
    "subreddit": "sports",
    "urls": [
      "http://i.imgur.com/ZP2Xgbf.jpg",
      "http://imgur.com/dMlrDUM",
      "http://ftw.usatoday.com/2016/09/south-park-colin-kaepernick-anthem-protest-nfl",
      "http://i.imgur.com/TUC50Wn.gifv",
      "http://www.nfl.com/news/story/0ap3000000703603/article/bills-fire-offensive-coordinator-greg-roman",
      "https://i.redd.it/3j6bdfk20ylx.jpg",
      "http://www.cbssports.com/nfl/news/heres-the-reason-we-obsess-over-rg3-tiger-tim-tebow-and-johnny-manziel/",
      "http://i.imgur.com/ibbpAP2.gifv",
      "http://www.bbc.com/sport/olympics/37371735",
      "http://www.espn.com/espn/story/_/id/17552385/online-retailer-fanatics-takes-harambe-banned-list-customized-jerseys",
      "https://www.reddit.com/r/sports/comments/533q3x/anyone_like_arena_football_here/",
      "http://www.bbc.co.uk/sport/olympics/37371735",
      "https://www.reddit.com/r/sports/comments/533ie2/whats_your_favorite_gameday_feast/",
      "http://www.bbc.com/sport/37382825",
      "https://m.youtube.com/watch?v=wMAmhUxjsp0&amp;feature=youtu.be",
      "http://i.imgur.com/eyyXw2q.gif",
      "https://twitter.com/dkurtenbach/status/775562761543688193",
      "http://www.highlighthub.com/bills-marquise-goodwin-burns-darrelle-revis-for-84-yard-touchdown/",
      "https://i.reddituploads.com/54cc99b31e8b48dbbec0edbe1d571e44?fit=max&amp;h=1536&amp;w=1536&amp;s=8f33f9120581730492c19034fe899632",
      "https://ca.sports.yahoo.com/photos/paralympians-listening-to-their-medals-slideshow/",
      "http://www.nytimes.com/2016/09/11/sports/ncaafootball/wearable-technology-nike-privacy-college-football.html?smid=re-share",
      "http://www.90min.com/posts/3792045-lionel-messi-names-the-barcelona-teammate-who-still-amazes-the-5-time-balon-d-or-winner",
      "https://www.reddit.com/r/sports/comments/52zqqm/after_listening_to_an_old_mcenroe_interview_an/",
      "http://adage.com/article/special-report-the-olympics/nbc-rio-olympics-quarter-billion-profit/305859/",
      "http://www.bbc.com/sport/cycling/37371057"
    ]
  }
]
```

## CLI

You can also use the `fetch-subreddit` module via the CLI, using `./bin/fetch-subreddit.js` locally during development, or by using `fetch-subreddit` in ./node_modules/.bin/ if installed as a local dependency or global dependency:

```sh
$ ./bin/fetch-subreddit.js worldnews sports

{
  "worldnews": [
    "http://www.independent.co.uk/news/uk/home-news/more-than-30000-ahmadiyya-muslims-from-across-the-world-meet-in-the-uk-to-reject-isis-and-islamic-a7191306.html?cmpid=facebook-post",
    "http://qz.com/755854/top-indian-hospitals-are-buying-kidneys-from-poor-villagers-to-sell-to-rich-patients/",
    "http://www.foxnews.com/world/2016/08/15/isis-gets-know-nothing-recruits-and-rejoices.html",
    "http://www.bbc.com/news/world-europe-37082637",
    "http://www.cnbc.com/2016/08/14/ledgers-in-ukraine-show-cash-listed-for-trumps-campaign-chief-manafort-from-yanukovychs-party-nyt.html",
    "http://abcnews.go.com/International/wireStory/iraqi-men-arrested-years-day-rape-austria-41392461",
    "http://www.independent.co.uk/news/world/europe/charlie-hebdo-faces-fresh-death-threats-after-publishing-image-of-naked-muslims-a7190276.html",
    "http://www.independent.co.uk/news/world/europe/italy-seeks-new-deal-to-scrap-eu-austerity-as-its-economy-stalls-a7189936.html",
    "http://www.nbcnews.com/news/world/south-sudan-troops-raped-beat-foreigners-u-n-force-ignored-n630876",
    "http://www.bbc.com/news/world-latin-america-37077172?ns_mchannel=social&amp;ns_campaign=bbc_breaking&amp;ns_source=twitter&amp;ns_linkname=news_central",
    "http://www.csmonitor.com/World/2016/0814/Iraqi-Kurds-take-several-villages-on-advance-towards-Mosul",
    "http://www.dailymail.co.uk/news/article-3738732/Merkel-urge-chiefs-big-companies-hire-refugees-Bild-reports.html",
    "http://www.independent.co.uk/news/science/archaeology/revealed-remarkable-ancient-structure-found-just-two-miles-from-stonehenge-a7190476.html",
    "http://www.ibtimes.co.uk/julian-assange-wikileaks-will-show-how-us-intelligence-interferes-european-elections-1575387",
    "http://www.i24news.tv/en/news/israel/122691-160814-2-000-year-old-synagogue-discovered-in-galilee",
    "http://www.businessinsider.com/shadow-brokers-claims-to-hack-equation-group-group-linked-to-nsa-2016-8?r=UK&amp;IR=T",
    "https://weather.com/news/climate/news/july-2016-warmest-global-temperature-record",
    "https://www.theguardian.com/uk-news/2016/aug/15/woman-jailed-for-faking-childrens-illnesses-to-claim-benefits",
    "https://www.theguardian.com/world/2016/aug/15/kew-gardens-in-race-to-collect-and-preserve-madagascars-seeds",
    "http://www.sunstar.com.ph/manila/local-news/2016/08/15/duterte-tells-isis-i-can-do-it-10-times-better-you-491600",
    "http://www.japantimes.co.jp/news/2016/08/15/national/politics-diplomacy/emperor-expresses-deep-remorse-for-war-on-71st-anniversary-of-surrender-abe-does-not/#.V7Gc9Efr3IU",
    "http://www.smh.com.au/federal-politics/political-news/wake-up-aussies-farright-pauline-hanson-supporters-dressed-as-muslims-storm-church-20160814-gqsclh.html",
    "http://sputniknews.com/africa/20160814/1044254871/congo-massacre-kivu.html",
    "https://www.theguardian.com/australia-news/2016/aug/15/eric-abetz-says-the-phrase-angry-white-man-is-racial-vilification",
    "http://www.politico.eu/article/turkish-minister-europe-is-humiliating-us-coup-mevlut-cavusoglu/?"
  ],
  "sports": [
    "https://www.reddit.com/r/sports/comments/4whzfc/the_reddit_rio_olympics_2016_medal_tracker/",
    "http://imgur.com/a/xcmuH",
    "http://i.imgur.com/Xqg4g7w.gifv",
    "https://i.reddituploads.com/27031f0b5ffa4860a1f11508778dcd7b?fit=max&amp;h=1536&amp;w=1536&amp;s=1700132ce52b15d284c6dfb88196e8c2",
    "http://www.bbc.co.uk/sport/olympics/36689475",
    "https://www.rio2016.com/en/athletics-womens-hammer-throw-final",
    "http://i.imgur.com/c934R2c.gifv",
    "http://www.bbc.co.uk/sport/olympics/36689353",
    "http://www.nbcnewyork.com/news/national-international/US-Womens-Field-Hockey-Germany-Day-10-Rio-390193961.html",
    "http://www.bbc.com/news/uk-england-37082207",
    "https://www.youtube.com/watch?v=SJrqwlLPF9M",
    "http://www.local10.com/sports/former-gm-marlins-to-sign-alex-rodriguez",
    "https://www.yahoo.com/sports/news/cubs-use-incredibly-insensitive-song-after-aroldis-chapman-outing-154609104.html",
    "http://www.krem.com/news/local/kootenai-county/cda-mj-gets-special-delivery-from-his-idol/296314810",
    "http://www.usatoday.com/story/sports/olympics/rio-2016/2016/08/14/olympic-swimmer-ryan-lochte-held-up-gunpoint-rio/88715436/",
    "http://www.theglobeandmail.com/sports/olympics/a-triple-whammy-estonian-triplets-looking-to-boost-nations-profile-in-rio/article31403871/",
    "http://www.faz.net/aktuell/sport/olympia/deutscher-kanu-trainer-stefan-henze-gestorben-14389069.html",
    "https://i.reddituploads.com/720256425f43411c8959d0884cbc6b30?fit=max&amp;h=1536&amp;w=1536&amp;s=5bde6c8901f64ae8d68746b72b3aeacd",
    "http://www.abc.net.au/news/2016-08-14/olympics-skatetboarding-in-2020-tokyo-games-raises-drug-concerns/7733010",
    "https://i.reddituploads.com/2112d990a7f34853968f492000dd0148?fit=max&amp;h=1536&amp;w=1536&amp;s=1f2923f84b2b2959f6a40f84fbbd7d34",
    "http://www.bbc.co.uk/news/magazine-37064144",
    "http://www.gq.com/story/cam-newton-versace-pants-race-and-football",
    "http://www.nbcconnecticut.com/news/sports/Forget-the-Flowers-Medal-Winners-Receive-Sculpture-Instead-390144142.html?",
    "https://www.theguardian.com/media/2016/aug/15/bbc-john-inverdale-olympic-tennis-steve-redgrave",
    "http://www.nbcolympics.com/news/chinese-diver-he-zi-wins-silver-3m-gold-love-marriage-proposal",
    "https://www.reddit.com/r/sports/comments/4xv8g4/how_are_athletes_tested_for_doping_in_closed/"
  ]
}
```