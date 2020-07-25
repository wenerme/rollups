format:
	yarn dlx sort-package-json package.json packages/*/package.json
	yarn prettier --write package.json packages/*/package.json packages/*/rollup.config.js

ci:
	yarn install
	$(MAKE) format
	mkdir -p public

publish:
	yarn lerna publish from-package

gh-publish:
	echo '//npm.pkg.github.com:_authToken=${GITHUB_TOKEN}'>.npmrc
	yarn lerna publish from-package --yes --registry "https://npm.pkg.github.com/wenerme"
