# fetch-subreddit

Fetch a Reddit subreddit as JSON.

## Installation:

This isn't published on npm, so install directly from GitHub:

```sh
$ npm i pdehaan/fetch-subreddit -S
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

### Sample output:

```json
{
  "subreddit": "worldnews",
  "urls": [
    "http://www.independent.co.uk/news/uk/home-news/more-than-30000-ahmadiyya-muslims-from-across-the-world-meet-in-the-uk-to-reject-isis-and-islamic-a7191306.html?cmpid=facebook-post",
    "http://qz.com/755854/top-indian-hospitals-are-buying-kidneys-from-poor-villagers-to-sell-to-rich-patients/",
    "http://www.foxnews.com/world/2016/08/15/isis-gets-know-nothing-recruits-and-rejoices.html",
    "http://www.bbc.com/news/world-europe-37082637",
    "http://www.cnbc.com/2016/08/14/ledgers-in-ukraine-show-cash-listed-for-trumps-campaign-chief-manafort-from-yanukovychs-party-nyt.html",
    "http://www.independent.co.uk/news/world/europe/charlie-hebdo-faces-fresh-death-threats-after-publishing-image-of-naked-muslims-a7190276.html",
    "http://abcnews.go.com/International/wireStory/iraqi-men-arrested-years-day-rape-austria-41392461",
    "http://www.independent.co.uk/news/world/europe/italy-seeks-new-deal-to-scrap-eu-austerity-as-its-economy-stalls-a7189936.html",
    "http://www.nbcnews.com/news/world/south-sudan-troops-raped-beat-foreigners-u-n-force-ignored-n630876",
    "http://www.bbc.com/news/world-latin-america-37077172?ns_mchannel=social&amp;ns_campaign=bbc_breaking&amp;ns_source=twitter&amp;ns_linkname=news_central",
    "http://www.dailymail.co.uk/news/article-3738732/Merkel-urge-chiefs-big-companies-hire-refugees-Bild-reports.html",
    "http://www.csmonitor.com/World/2016/0814/Iraqi-Kurds-take-several-villages-on-advance-towards-Mosul",
    "http://www.ibtimes.co.uk/julian-assange-wikileaks-will-show-how-us-intelligence-interferes-european-elections-1575387",
    "http://www.independent.co.uk/news/science/archaeology/revealed-remarkable-ancient-structure-found-just-two-miles-from-stonehenge-a7190476.html",
    "http://www.smh.com.au/federal-politics/political-news/wake-up-aussies-farright-pauline-hanson-supporters-dressed-as-muslims-storm-church-20160814-gqsclh.html",
    "https://www.theguardian.com/world/2016/aug/15/kew-gardens-in-race-to-collect-and-preserve-madagascars-seeds",
    "http://sputniknews.com/africa/20160814/1044254871/congo-massacre-kivu.html",
    "http://www.i24news.tv/en/news/israel/122691-160814-2-000-year-old-synagogue-discovered-in-galilee",
    "http://www.japantimes.co.jp/news/2016/08/15/national/politics-diplomacy/emperor-expresses-deep-remorse-for-war-on-71st-anniversary-of-surrender-abe-does-not/#.V7Gc9Efr3IU",
    "http://www.sunstar.com.ph/manila/local-news/2016/08/15/duterte-tells-isis-i-can-do-it-10-times-better-you-491600",
    "http://www.politico.eu/article/turkish-minister-europe-is-humiliating-us-coup-mevlut-cavusoglu/?",
    "https://weather.com/news/climate/news/july-2016-warmest-global-temperature-record",
    "https://www.theguardian.com/uk-news/2016/aug/15/woman-jailed-for-faking-childrens-illnesses-to-claim-benefits",
    "https://www.theguardian.com/australia-news/2016/aug/15/eric-abetz-says-the-phrase-angry-white-man-is-racial-vilification",
    "http://www.bbc.com/news/37079397"
  ]
}
```
