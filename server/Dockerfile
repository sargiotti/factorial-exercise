# Usar una imagen base de Node.js
FROM node:18.19.0

# Crear un directorio de trabajo
WORKDIR /usr/src/app-back-end

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que correrá el servidor
EXPOSE 3001

# Comando para correr el servidor
CMD ["node", "index.js"]
