#!/usr/bin/env node

import generateSchema from 'json-to-graphql'

var stdin = process.stdin
var stdout = process.stdout
var inputChunks = ""

stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  inputChunks += chunk;
});

stdin.on('end', function () {
  var parsed = JSON.parse(inputChunks);
  stdout.write(generateSchema(parsed));
  stdout.write('\n');
});
