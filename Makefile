dev:
	echo "Starting development environment"
	# systemctl start docker
	docker-compose -f ./docker-compose.yml up --build