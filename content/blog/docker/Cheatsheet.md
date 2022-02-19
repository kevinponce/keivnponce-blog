---
title: Docker Cheatsheet
date: "2021-04-10T22:12:00.121Z"
tags: ["docker"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: Reference guide for docker
---

# Setup
## Install
go to `https://docs.docker.com/get-started/`
download version for your OS

## Check version
```
docker version
```

# Lifecycle

## Create
*This is will create a new contrainer and return its id*
```
docker create hello-world
```

## Start
```
docker start -a ecfa027a48b2840d6ec8db4d14e558577bf3f6c06d5539090bdada3fd5ca8e29
```
*Will print all of the logs when it is running*

```
docker start -a ecfa027a48b2840d6ec8db4d14e558577bf3f6c06d5539090bdada3fd5ca8e29
```
*Will only print the response*

## Run
*Run = Create + Start*
```
docker run busybox echo hi there
```

## Stop
*Sends SIGTERM and waits till process stop before it stops container*
```
docker create busybox ping  google.com
docker start a2b4916bd95adfd7badc8db02f40cb1ab816e66be970a306771f5dee4c189af5
docker ps

docker stop a2b4916bd95a
```

## Kill
*Sends SIGKILL will shut down now and does not wait for processes to stop*
```
docker create busybox ping  google.com
docker start a2b4916bd95adfd7badc8db02f40cb1ab816e66be970a306771f5dee4c189af5
docker ps

docker kill a2b4916bd95a
```

## Prune
*This will delete stopped containers, cache, and images*
```
docker system prune
```

# List Contrainers
## Running
```
docker ps
```

## All
*You are able to reuse container id to run it*
```
docker ps --all
```

# Logs
```
docker create busybox echo hi there
docker start 12122afb3886801718694ed0d32fc414cbcf051f330515f5c5690f5c6b00924
docker logs 12122afb3886801718694ed0d32fc414cbcf051f330515f5c5690f5c6b00924
```

# Running commands in existing container
## run a certain command
```
docker run redis
docker ps
docker exec -it f82394b79b0d redis-cli
```

## run a shell command
```
docker run redis
docker ps
docker exec -it f82394b79b0d sh
redis-sever
```
