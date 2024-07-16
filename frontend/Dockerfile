# Usar una imagen base de Node.js
FROM node:18.19.0

# Crear un directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para correr la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]
