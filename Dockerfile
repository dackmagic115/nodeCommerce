FROM node:12

RUN mkdir /usr/app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . . 

EXPOSE 8080

CMD ["npm", "start"]
