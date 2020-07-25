# rollups

| Last Update |
| ----------- |
| [![Update](https://github.com/wenerme/rollups/workflows/Update/badge.svg)](https://github.com/wenerme/rollups/actions?query=workflow%3AUpdate) |

Rollup of other libraries that does not provide bundles.

## Add New Package

```bash
git clone https://github.com/wenerme/rollups
cd rollups

# new package moment
make init-moment
# may need to customize packages/$PKG/rollup.config.js
make build-moment
make README.md

# done add new package
git add packages yarn.lock README.md
git commit -m 'new package moment'
```

> Publish to npm will done by github ci

# Packages

| Package | Version | License | Rollup | Rollup Version | jsdelivr | unpkg |
| ------- | ------- | ------- | ------ | -------------- | -------- | ----- |
| [console-feed](https://www.npmjs.com/package/console-feed) | [![VERSION](https://img.shields.io/npm/v/console-feed)](https://www.npmjs.com/package/console-feed) | ![LICENSE](https://img.shields.io/npm/l/console-feed) | [@rollups/console-feed](./pacckages/console-feed) | [![VERSION](https://img.shields.io/npm/v/@rollups/console-feed)](https://www.npmjs.com/package/@rollups/console-feed) | [jsdelivr](https://cdn.jsdelivr.net/npm/@rollups/console-feed) | [unpkg](https://unpkg.com/@rollups/console-feed) |
| [inversify](https://www.npmjs.com/package/inversify) | [![VERSION](https://img.shields.io/npm/v/inversify)](https://www.npmjs.com/package/inversify) | ![LICENSE](https://img.shields.io/npm/l/inversify) | [@rollups/inversify](./pacckages/inversify) | [![VERSION](https://img.shields.io/npm/v/@rollups/inversify)](https://www.npmjs.com/package/@rollups/inversify) | [jsdelivr](https://cdn.jsdelivr.net/npm/@rollups/inversify) | [unpkg](https://unpkg.com/@rollups/inversify) |
| [lodash](https://www.npmjs.com/package/lodash) | [![VERSION](https://img.shields.io/npm/v/lodash)](https://www.npmjs.com/package/lodash) | ![LICENSE](https://img.shields.io/npm/l/lodash) | [@rollups/lodash](./pacckages/lodash) | [![VERSION](https://img.shields.io/npm/v/@rollups/lodash)](https://www.npmjs.com/package/@rollups/lodash) | [jsdelivr](https://cdn.jsdelivr.net/npm/@rollups/lodash) | [unpkg](https://unpkg.com/@rollups/lodash) |
| [moment](https://www.npmjs.com/package/moment) | [![VERSION](https://img.shields.io/npm/v/moment)](https://www.npmjs.com/package/moment) | ![LICENSE](https://img.shields.io/npm/l/moment) | [@rollups/moment](./pacckages/moment) | [![VERSION](https://img.shields.io/npm/v/@rollups/moment)](https://www.npmjs.com/package/@rollups/moment) | [jsdelivr](https://cdn.jsdelivr.net/npm/@rollups/moment) | [unpkg](https://unpkg.com/@rollups/moment) |
