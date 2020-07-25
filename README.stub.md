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
