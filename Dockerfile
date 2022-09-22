
FROM node:latest as node


WORKDIR /app


COPY . .


RUN npm install


RUN npm run build --prod








FROM nginx:alpine




WORKDIR /usr/share/nginx/html


COPY --from=node /app/dist/ouivalo-challenge /usr/share/nginx/html