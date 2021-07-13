DELNAME	= 	node_modules \
			.vscode \
			dist \
			package-lock.json

install:
	cd server;
	npm install;

start:
	gulp

clean:
			rm -rf $(DELNAME)

re:			clean all

.PHONY:		all clean fclean re