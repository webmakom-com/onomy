FROM starport/cli:develop

ENV PATH /usr/bin

# Set working directory for the build
WORKDIR /go/src/github.com/onomyprotocol/onomy

# Add source files
COPY . .

# Run onomyd by default, omit entrypoint to ease using container with onomycli
ENTRYPOINT ["starport"]