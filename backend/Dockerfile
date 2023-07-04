FROM node:18.16.0

WORKDIR /usr/src/dev-pizza-api

COPY ./package.json .

RUN npm install

COPY . .

CMD npm run dev