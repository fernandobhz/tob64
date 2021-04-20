#!/usr/bin/env node
const fs = require('fs');
const filePath = process.argv[2];
const buff = fs.readFileSync(filePath);
const base64data = buff.toString('base64');
fs.writeFileSync(`${filePath}.b64`, base64data);
console.log("done");
