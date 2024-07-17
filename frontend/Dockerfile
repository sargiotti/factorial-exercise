# Usar una imagen base de Node.js
FROM node:18.19.0

COPY . .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
