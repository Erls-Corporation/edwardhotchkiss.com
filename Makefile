
CSS_DIR = assets/css/
LESS_DIR = assets/less/

css:
	lessc ${LESS_DIR}index.less ${CSS_DIR}main.min.css -compress

JS_DIR = assets/js/

js:
	uglifyjs -o ${JS_DIR}main.min.js --no-mangle --no-squeeze ${JS_DIR}jekyll.js

.PHONY: css