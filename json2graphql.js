#!/usr/bin/env node

import generateSchema from 'json-to-graphql';

/*
put your json (which should consist of either 1 object or an array of objects all the same type) on stdin.  Popping out of stdout will be a graphql schema derived from the input.  If multiple objects are input, it may be able to infer types better than if just one object is provided.

The schema will not necessarily be ready to run, where types of objects are questionable, you will have to fix things up!  And of course, you will sedulously add a description to each field.

still, it is better than typing everything in


put this:
"json2graphql": "babel-node json2graphql.js"
in your list of scripts in package.json

then you can do stuff like:

npm run json2graphql <FileContainingJSON.json
or
(assuming you have copied a json object):
pbpaste | npm run json2graphql

in both of those cases the generated graphql schema will go to the terminal, but I'm sure you can use your shell fu to figure out how to put it into a file (>MYFILE.gql) or onto the pasteboard (| pbcopy)!!!

Most useful command (IHMO, of course!) is when you've got the json all printed out in, say, the console or the postman window, select it all and copy it, then:

pbpaste | python -mjson.tool | npm run json2graphql | pbcopy

(the json.tool will sort the json by key name which means your graphql schema will be sorted...SO much handier)

and then go to whereever you want the graphql (probably in an editor window, which has a .json file open) and paste

*/

const stdin = process.stdin;
const stdout = process.stdout;
let inputChunks = '';

stdin.setEncoding('utf8');

stdin.on('data', (chunk) => {
  inputChunks += chunk;
});

stdin.on('end', () => {
  const parsed = JSON.parse(inputChunks);
  stdout.write(generateSchema(parsed));
  stdout.write('\n');
});
