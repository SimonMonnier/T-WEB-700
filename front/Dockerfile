FROM node:lts-alpine AS frontend

WORKDIR /front
COPY ./ /front
RUN npm install
COPY entrypoint.sh /usr/bin/entrypoint.sh
EXPOSE 8080
ENTRYPOINT ["/usr/bin/entrypoint.sh"]
