format:
	yarn dlx sort-package-json package.json packages/*/package.json
	yarn prettier --write package.json packages/*/package.json packages/*/rollup.config.js

ci: format
	mkdir -p public
