
test:
	npm test --  --run --reporter verbose


commit: test
	git commit -a -m "passed test"
