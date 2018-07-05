import {getAllResults} from "./search";
import fs from 'fs';

function markdownize(packages) {
  return packages.reduce((acc, o) => {
    let p = o.package;
    return `${acc}
## [${p.name}](https://www.npmjs.com/package/${p.name})
${p.description}
Author: ${p.author.name}
Version: ${p.version}
`;
  }, '');
}

async function createMarkdown(headerFile) {
  let header = fs.readFileSync(headerFile);

  let results = await getAllResults();
  let markdown = markdownize(results);
  return `${header}
${markdown}`;
}

export { createMarkdown };
