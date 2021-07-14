DELNAME	= 	node_modules \
			.vscode \
			dist \
			package-lock.json \
			.idea

install:
	cd server;
	npm install;
	npm install gulp-svgmin --save-dev;
	npm install gulp-svgstore --save-dev;
	npm install gulp-replace --save-dev;

run:
	gulp

clean:
			rm -rf $(DELNAME)

re:			clean all

.PHONY:		all clean fclean re