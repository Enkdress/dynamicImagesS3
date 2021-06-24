# Docker file to
# docker build -t TEST_DYNAMIC -f Dockerfile --build-arg environment="integration" --build-arg s3bucket="s3://******" --squash .
# docker run --publish 3000:3000 --detach --name TEST_DYNAMIC TEST_DYNAMIC:latest

FROM node:14.17-alpine3.12

ARG environment
ARG s3bucket

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
