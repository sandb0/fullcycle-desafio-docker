#!/bin/sh

# Wait 5 minutes for the database to be ready.
dockerize -wait tcp://db:3306 -timeout 300s

node src/main.js