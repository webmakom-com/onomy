# syntax = docker/dockerfile:1.2
# WARNING! Use `DOCKER_BUILDKIT=1` with `docker build` to enable --mount feature.

## prep the base image.
#
FROM golang

ENV GO111MODULE=on
ENV GOFLAGS=-mod=vendor
ENV GOPATH="$HOME/go"



RUN apt update && \
    apt-get install -y \
        build-essential \
        ca-certificates \
        curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

RUN curl -v https://get.starport.network/starport | bash

# Set working directory for the build
WORKDIR /apps/onomy

# Add source files
COPY . .

ENV PATH=$PATH:/go

RUN useradd -ms /bin/bash onomy
USER onomy

# see docs for exposed ports:
#   https://docs.starport.network/configure/reference.html#host 
EXPOSE 26657
EXPOSE 26656
EXPOSE 6060 
EXPOSE 9090 
EXPOSE 1317 
EXPOSE 8080
EXPOSE 12345 

ENTRYPOINT ["starport"]