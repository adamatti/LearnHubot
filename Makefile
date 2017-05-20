docker:
	docker-compose build
	docker-compose run --rm bot

run:
	./bin/hubot --name hubot