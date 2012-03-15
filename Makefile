
# CSS Directory
CSS_DIR = assets/css/

# LESS Directory
LESS_DIR = assets/less/

# JS Directory
JS_DIR = assets/js/

# minify CSS with LESSC
css:
	lessc ${LESS_DIR}index.less ${CSS_DIR}main.min.css -compress

# minify JavaScript with UgilifyJS
js:
	uglifyjs -o ${JS_DIR}main.min.js --no-mangle --no-squeeze ${JS_DIR}jekyll.js

# start jekyll
run:
	jekyll --server

.PHONY: js css