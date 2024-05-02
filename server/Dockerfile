FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm install nodemon -g
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]