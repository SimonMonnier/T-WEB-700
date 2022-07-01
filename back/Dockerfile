FROM node:lts-alpine AS back

WORKDIR /back
COPY ./ /back
RUN npm install -g back
RUN npm install
COPY entrypoint.sh /usr/bin/entrypoint.sh
EXPOSE 8080
ENTRYPOINT ["/usr/bin/entrypoint.sh"]

