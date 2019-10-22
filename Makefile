install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
publish:
	npm publish --dry-run

myStart: publish
	brain-games
lint:
	npx eslint
