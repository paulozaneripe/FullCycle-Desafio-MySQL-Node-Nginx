FROM node:alpine
WORKDIR /var/www/app
COPY . /var/www/app
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node", "index.js" ]
