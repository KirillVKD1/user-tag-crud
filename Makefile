SHELL:= /bin/bash

start:
	@docker-compose up -d

logs:
	@docker-compose logs -f

stop:
	@docker-compose down

clear:
	@docker system prune -f