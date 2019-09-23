FROM node:8.9.4-alpine

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm rebuild node-sass
RUN npm run build

ENV HOST 0.0.0.0

EXPOSE 8080
