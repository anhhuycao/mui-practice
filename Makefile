COMPOSE_FILE = docker-compose.dev.yml

ps:
	docker-compose -f ${COMPOSE_FILE} ps
log:
	docker-compose -f ${COMPOSE_FILE} logs
down:
	docker-compose -f ${COMPOSE_FILE} down
up:
	docker-compose -f ${COMPOSE_FILE} up -d
build:
	docker-compose -f ${COMPOSE_FILE} build --no-cache
exec:
	docker-compose -f ${COMPOSE_FILE} exec gui /bin/sh