import npmFetch from 'npm-registry-fetch';

const CALLBAG_SEARCH = '/-/v1/search';
const NUM_TO_RETURN = 100;


let getSearchResults = async function(from) {
  const opts = {
    query: {
      text: "keywords:callbag",
      from: from || 0,
      size: NUM_TO_RETURN,
    },
  };
  let result = await npmFetch.json(CALLBAG_SEARCH, opts);
  return result.objects;
};

let getAllResults = async function() {
  let latestResults = [];
  let from = 0;
  let results = [];
  do {
    console.log(`Fetching results for ${from} to ${from + NUM_TO_RETURN}`);
    latestResults = await getSearchResults(from);
    from += latestResults.length;
    results = results.concat(latestResults);
  } while(latestResults.length > 0);

  return results;
};

let printAllResults = async function () {
  let results = await getAllResults();
  console.log(results);
};
printAllResults();
