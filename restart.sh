#!/bin/bash

REPO_PATH="/home/linux/portfolio-docker/Portfolio"
DOCKERFILE_PATH="/home/linux/portfolio-docker/Portfolio/portfolio-svelteKit"
CONTAINER_NAME="portfolio"
IMAGE_NAME="portfolio"

CURRENT_HASH=$(git -C "$REPO_PATH" rev-parse HEAD)

git -C "$REPO_PATH" pull
NEW_HASH=$(git -C "$REPO_PATH" rev-parse HEAD)

if [ "$CURRENT_HASH" != "$NEW_HASH" ]; then
    sudo docker stop "$CONTAINER_NAME" 2>/dev/null
    sudo docker rm "$CONTAINER_NAME" 2>/dev/null
    sudo docker build -t "$IMAGE_NAME" "$DOCKERFILE_PATH"
    sudo docker run -d --network=docker-network --ip=192.168.0.2 --name "$CONTAINER_NAME" "$IMAGE_NAME"
    wall Quizapp Container geupdated #lol
fi
wall Container nicht geupdated
