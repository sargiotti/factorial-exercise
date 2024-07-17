
FROM node:18.19.0

WORKDIR /usr/src/app-front-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
