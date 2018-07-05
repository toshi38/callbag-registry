import path from 'path';
import fs from 'fs';
import {createMarkdown} from "./markdownize";

const MD_HEADER = path.join(__dirname, '..', 'static', 'header.md');
const MD_OUTPUT = path.join(__dirname, '..', 'README.md');

async function buildReadme() {
  let result = await createMarkdown(MD_HEADER);

  console.log(result);
  fs.writeFileSync(MD_OUTPUT, result);
}

buildReadme();
