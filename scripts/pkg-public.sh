#!/bin/bash
set -ex

root=$PWD
dir=public/$PKG/$(jq '.version' packages/$PKG/package.json -r)
mkdir -p ${dir}

(cd packages/$PKG; cp -rt $root/$dir $(jq '.files | join(" ")' package.json -r) )
