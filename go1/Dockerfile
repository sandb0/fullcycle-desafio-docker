# Builder stage.
FROM golang:1.19rc1-alpine3.16 AS builder

WORKDIR /go-fullcycle-rocks
COPY rocks.go .

RUN go build rocks.go

# Runtime stage.
FROM scratch

WORKDIR /go-fullcycle-rocks
COPY --from=builder /go-fullcycle-rocks/rocks .

ENTRYPOINT [ "./rocks" ]