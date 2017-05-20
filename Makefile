deps:
	docker-compose up -d cache
	docker-compose up -d chat

docker:
	docker-compose up --build -d

run-docker:
	docker-compose up -d bot

run:
	./bin/hubot --name bot

stop:
	docker-compose stop
	docker-compose rm -fv

cache:
	docker-compose run -d cache -p "6379:6379"