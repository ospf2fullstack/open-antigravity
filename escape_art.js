const fs = require('fs');
const path = require('path');

const artPath = 'C:/Users/ishan/Documents/Projects/open-antigravity/banner_raw.txt';
const art = fs.readFileSync(artPath, 'utf8');

const escapedArt = art
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\${/g, '\\${');

console.log(JSON.stringify(escapedArt));
