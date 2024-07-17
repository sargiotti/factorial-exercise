## Running the Application

### Pre-requisites

1. NPM and Node.js 18.19.0 or above installed

or

2. Docker installed if not, follow the instructions here: https://docs.docker.com/engine/install/

You can run the application in two ways: directly with Node.js or using Docker.

### Method 1: Running with Node.js 18.19.0

1. Install dependencies

For the Back-end: move to the folder /server and run "npm install"

For the Front-end: move to the folder /frontend and run "npm install"

2. Run the Application
For the Back-end: 

cd ../server

node index.js"

For the Front-end:

cd ../frontend

npm run dev

3. Access the Application

Frontend: http://localhost:3000

Backend: http://localhost:3001




### Method 2: Running with Docker-Compose

1. In the root folder run "docker-compose up --build"
    This will build and mount the image of the project


### In case of front-end dependency error just install them by hand and re-run step number 1

2. Acces the Application

Frontend: http://localhost:3000

Backend: http://localhost:3001




### Once the front-end is loaded, refresh the page to bring data from the database

