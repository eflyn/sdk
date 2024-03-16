const fs = require('fs');
const path = require('path');

const newVersion = process.env.TAG_NAME.slice(1);

const packageJsonPath = path.join(__dirname, '../package.json');

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.version = newVersion;
const [major, minor, patch] = newVersion.split('.');
packageJson.dependencies['@eflyn/esuite-client'] = `~${major}.${minor}.0`;

console.log('[new version]', newVersion);
console.log('[new deps]', packageJson.dependencies);

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

fs.unlinkSync(path.join(__dirname, '../package-lock.json'));
