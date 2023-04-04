#base image
FROM node:alpine

#install dependencies
WORKDIR /usr/loginapp
COPY ./package.json ./
RUN npm install
COPY ./ ./

#start-up command
CMD npm start