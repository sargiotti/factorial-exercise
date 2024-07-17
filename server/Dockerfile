
FROM node:18.19.0

WORKDIR /usr/src/app-back-end

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "index.js"]
