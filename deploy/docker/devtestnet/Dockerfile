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

# Install minimum necessary dependencies, build Cosmos SDK, remove packages
RUN apk add --no-cache $PACKAGES
RUN make install

# Final image
FROM alpine:edge

ENV onomy /onomy

# Install ca-certificates
RUN apk add --update ca-certificates

RUN addgroup onomy && \
    adduser -S -G onomy onomy -h "$onomy"

USER onomy

WORKDIR $onomy

# Copy over binaries from the build-env
COPY --from=build-env /go/bin/onomyd /usr/bin/onomyd


RUN onomyd init --chain-id=onomy-testnet validator1 && \
    onomyd keys add validator1 && \
    onomyd add-genesis-account $(onomyd keys show validator1 -a) 10000000nom && \
    onomyd gentx validator1 10000000nom --chain-id onomy-testnet && \
    onomyd collect-gentxs


# Run onomyd by default, omit entrypoint to ease using container with onomycli
CMD ["onomyd"]