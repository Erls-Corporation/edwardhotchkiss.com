
CSS_DIR = public/css/
LESS_DIR = public/less/

css:
	lessc ${LESS_DIR}index.less ${CSS_DIR}main.min.css -compress

JS_DIR = public/js/

js:
	uglifyjs -o ${JS_DIR}main.min.js --no-mangle --no-squeeze ${JS_DIR}jekyll.js

.PHONY: css js