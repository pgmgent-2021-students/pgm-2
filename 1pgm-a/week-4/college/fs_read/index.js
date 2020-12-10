// path module
const path = require('path');
const foldersInPath = process.env.PATH.split(path.delimiter);
console.log(foldersInPath);
// Seperator
// windows: \\
// Unix: /
console.log(path.sep);