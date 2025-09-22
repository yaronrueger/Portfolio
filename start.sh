#!/bin/bash

REPO_PATH="/home/linux/portfolio-docker/Portfolio"
DOCKERFILE_PATH="/home/linux/portfolio-docker/Portfolio/portfolio-svelteKit"
CONTAINER_NAME="portfolio"
IMAGE_NAME="portfolio"

sudo docker stop "$CONTAINER_NAME" 2>/dev/null
sudo docker rm "$CONTAINER_NAME" 2>/dev/null
sudo docker build -t "$IMAGE_NAME" "$DOCKERFILE_PATH"
sudo docker run -d --network=docker-network --ip=192.168.0.2 --name "$CONTAINER_NAME" "$IMAGE_NAME"
