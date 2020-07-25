#!/bin/bash
set -ex

mkdir -p packages/$PKG
packagejson=packages/$PKG/package.json
[ -f packages/$PKG/package.json ] || {
  cp scripts/package.tpl.json $packagejson
  sed -i "s/__PKG_NAME__/$PKG/g" $packagejson
}

[ -f packages/$PKG/rollup.config.json ] || {
  cp scripts/rollup.tpl.js packages/$PKG/rollup.config.js
}

yarn --cwd packages/$PKG add -D $PKG
