format:
	yarn dlx sort-package-json package.json packages/*/package.json
	yarn prettier --write package.json packages/*/package.json packages/*/rollup.config.js

ci:
	yarn install
	$(MAKE) format
	mkdir -p public
