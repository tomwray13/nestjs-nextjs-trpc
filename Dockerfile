# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.16.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

ARG PNPM_VERSION=8.6.7
RUN npm install -g pnpm@$PNPM_VERSION

# Install nest CLI
RUN npm install -g @nestjs/cli
# Install angular CLI
RUN npm install -g @angular/cli

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential 


# Copy application code
COPY . .

# Install node modules 
RUN pnpm install husky -w

# Build application in server app
RUN pnpm --filter server run build


# Start the server by default, this can be overwritten at runtime
EXPOSE 4000

CMD [ "pnpm", "--filter", "server", "run", "start:prod" ]
