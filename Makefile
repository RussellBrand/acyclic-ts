
test:
	npm test -- --silent --run 


commmit: test
	commit -a -m "passed test"
