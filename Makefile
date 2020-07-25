format:
	yarn dlx sort-package-json package.json packages/*/package.json
	yarn prettier --write package.json packages/*/package.json packages/*/rollup.config.js

ci:
	yarn install --immutable
	# $(MAKE) format
	mkdir -p public

publish:
	yarn lerna publish from-package

gh-publish:
	# https://github.com/lerna/lerna/issues/361
	# https://github.com/lerna/lerna/issues/1697
	echo '//npm.pkg.github.com:_authToken=${GITHUB_TOKEN}' > .npmrc
	echo '//npm.pkg.github.com:_authToken=${GITHUB_TOKEN}' > ~/.npmrc
	cp .npmrc packages/*/
	yarn lerna publish from-package --yes --registry "https://npm.pkg.github.com/wenerme"
