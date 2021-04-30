# Simple usage with a mounted data directory:
# > docker build -t onomy .
# > docker run -it -p 46657:46657 -p 46656:46656 -v ~/.onomy:/onomy/.onomy onomy onomyd init
# > docker run -it -p 46657:46657 -p 46656:46656 -v ~/.onomy:/onomy/.onomy onomy onomyd start
FROM golang:1.16-alpine AS build-env

# Set up dependencies
ENV PACKAGES curl make git libc-dev bash gcc linux-headers eudev-dev python3

# Set working directory for the build
WORKDIR /go/src/github.com/onomyprotocol/onomy

# Add source files
COPY . .

RUN go version

# Install minimum necessary dependencies, build Cosmos SDK, remove packages
RUN apk add --no-cache $PACKAGES
RUN make install

# Final image
FROM alpine:edge

ENV ONOMY /onomy

# Install ca-certificates
RUN apk add --update ca-certificates

RUN addgroup onomy && \
    adduser -S -G onomy onomy -h "$ONOMY"

USER onomy

WORKDIR $ONOMY

# Copy over binaries from the build-env
COPY --from=build-env /go/bin/onomyd /usr/bin/onomyd

# Run onomyd by default, omit entrypoint to ease using container with onomycli
CMD ["onomyd"]