const fs = require('fs');

// Your setup logic here
console.log('Running setup logic...');
const serverJs = require('./server')
// Example: Create a new file
fs.writeFileSync('server.js', JSON.stringify(serverJs, null, 2));

// Example: Update package.json
const packageJson = require('./package.json');
packageJson.customProperty = 'Some custom value';
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('Setup completed.');
