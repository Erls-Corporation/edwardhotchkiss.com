
CSS_DIR = assets/css/

LESS_DIR = assets/less/

css:
	lessc ${LESS_DIR}index.less ${CSS_DIR}main.min.css -compress

run:
	jekyll --server

.PHONY: css