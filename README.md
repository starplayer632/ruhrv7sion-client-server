# ruhrv7sion-client-server
Backend and Frontend
* Famous TechStack: MERN = Mongo + Express + React + NodeJS
* Development = Backend Node.js server + Frontend React server
* Production = Backend Node.js server + static react files on a webserver
* MongoDB is running in the web and not localy. For this project to work the .env file is needed in the backend. More about this below.


# Installation
1. Install Node.js + NPM ([Short instruction from the documentaion](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
2. Clone Repository using e.g. GitHub Desktop (recommended)
3. !node_moduels are needed to be installed: 
    3.1 Navigate a terminal to your server folder
    3.2 Enter: npm install
4. Repeat 3. for the client folder


## Run React server port 3000
1. Navigate a terminal to your client folder
2. Enter the following code: npm start

## Run Node dev server port 1337
1. Navigate a terminal to your server folder
2. Enter the following code: npm run dev

## .env file 
1. create .env file in folder named "server"
2. ask the onwer for the data to insert here
Sampledata:
```
    PORT=XXX
    ACCESS_TOKEN_SECRET=XXX
    REFRESH_TOKEN_SECRET=XXX
    DATABASE_URI=XXX
```



