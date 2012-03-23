
CSS_DIR = assets/css/

LESS_DIR = assets/less/

JS_DIR = assets/js/

css:
	lessc ${LESS_DIR}index.less ${CSS_DIR}main.min.css -compress

js:
	uglifyjs -o ${JS_DIR}main.min.js --no-mangle --no-squeeze ${JS_DIR}jekyll.js

run:
	jekyll --server

.PHONY: js css