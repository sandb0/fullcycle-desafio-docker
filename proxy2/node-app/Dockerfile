FROM node:lts-alpine3.15

WORKDIR /node-app

COPY . .
RUN yarn
RUN chmod +x ./docker-entrypoint.sh

RUN apk add wget
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

USER node

ENTRYPOINT [ "./docker-entrypoint.sh" ]