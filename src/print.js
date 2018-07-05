import {getAllResults} from "./search";

async function printAllResults() {
  let results = await getAllResults();
  console.log(results);
}

export { printAllResults };
