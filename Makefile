PKGS:=$(shell ls packages/*/rollup.config.js | egrep -o '[^/]*/rollup' | egrep -o '^[^/]*' | paste -sd ' ' -)

love:
	@echo No default task
	@exit 1

format:
	yarn dlx sort-package-json package.json packages/*/package.json
	yarn prettier --write package.json packages/*/package.json packages/*/rollup.config.js

ci:
	yarn install --immutable
	# $(MAKE) format
	mkdir -p public

publish:
	yarn lerna publish from-package

ci-prepare:
	yarn install --immutable

gh-ci: ci-prepare
	$(MAKE) public
	git status

gh-update: ci-prepare update
	git add packages
	STAGED_ONLY=1 $(MAKE) public
	git status

gh-publish: npmrc ci-publish

# # GPR require org name match owner name - useless
# gh-publish:
# 	# https://github.com/lerna/lerna/issues/361
# 	# https://github.com/lerna/lerna/issues/1697
# 	echo '//npm.pkg.github.com:_authToken=${GH_NPM_TOKEN}' > .npmrc
# 	echo '//npm.pkg.github.com:_authToken=${GH_NPM_TOKEN}' > ~/.npmrc
# 	cp .npmrc packages/*/
# 	yarn lerna publish from-package --yes --@rollups:registry https://npm.pkg.github.com/wenerme

npmrc:
ifeq (,${NPM_TOKEN})
	@echo no npm NPM_TOKEN
	@exit 1
endif
	echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc
	cp .npmrc packages/*/

ci-publish:
	yarn lerna publish from-package --yes

build:
	yarn workspaces foreach run prepublishOnly

build-%:
ifneq (,${STAGED_ONLY})
	git diff --quiet --staged master -- packages/$* || yarn workspace @rollups/$* run prepublishOnly
else
	yarn workspace @rollups/$* run prepublishOnly
endif

public-%: build-%
ifneq (,${STAGED_ONLY})
	git diff --quiet --staged master -- packages/$* || PKG=$* ./scripts/pkg-public.sh
else
	PKG=$* ./scripts/pkg-public.sh
endif

public: $(addprefix public-,$(PKGS))
	mkdir -p public
	cp README.md public
	@echo Done

update-%:
	yarn workspace @rollups/$* add -D $*
	cp scripts/update.js packages/$*
	yarn workspace @rollups/$* node update.js
	rm packages/$*/update.js

update: $(addprefix update-,$(PKGS))
	$(MAKE) format
	@echo Done

status:
	@echo Packages: $(PKGS)
