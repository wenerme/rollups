const path = require('path');
const fs = require('fs');

async function buildPackages() {
  let rows = [
    `| Package | Version | License | Rollup | Rollup Version | jsdelivr | unpkg |`,
    `| ------- | ------- | ------- | ------ | -------------- | -------- | ----- |`,
  ];

  /*
| Package | Version | License | Rollup | Rollup Version | jsdelivr | unpkg |
| ------- | ------- | ------- | ------ | -------------- | -------- | ----- |
| [inversify](https://www.npmjs.com/package/inversify) | [![VERSION](https://img.shields.io/npm/v/inversify)](https://www.npmjs.com/package/inversify) | ![LICENSE](https://img.shields.io/npm/l/inversify) | [@rollups/inversify](./pacckages/inversify) | [![VERSION](https://img.shields.io/npm/v/@rollups/inversify)]((https://www.npmjs.com/package/@rollups/inversify)) | [jsdelivr](https://cdn.jsdelivr.net/npm/@rollups/inversify) | [unpkg](https://unpkg.com/@rollups/inversify) |
*/
  const glob = require('glob');
  let files = await new Promise((resolve, reject) =>
    glob('packages/*/package.json', (e, v) => {
      if (e) {
        reject(e);
      } else {
        resolve(v);
      }
    }),
  );

  rows.push(...files.map((v) => JSON.parse(fs.readFileSync(v))).map(tpl));

  return rows.join('\n');
}
function tpl(pkg) {
  const name = pkg.name.split('/')[1];
  return `| [${name}](https://www.npmjs.com/package/${name}) | [![VERSION](https://img.shields.io/npm/v/${name})](https://www.npmjs.com/package/${name}) | ![LICENSE](https://img.shields.io/npm/l/${name}) | [@rollups/${name}](./pacckages/${name}) | [![VERSION](https://img.shields.io/npm/v/@rollups/${name})]((https://www.npmjs.com/package/@rollups/${name})) | [jsdelivr](https://cdn.jsdelivr.net/npm/@rollups/${name}) | [unpkg](https://unpkg.com/@rollups/${name}) |`;
}

async function main() {
  const s = [fs.readFileSync('./README.stub.md'), '# Packages', '', await buildPackages(), ''];

  fs.writeFileSync('./README.md', s.join('\n'));
}

(async function () {
  await main();
})();
