# TODO List

This is a basic CRUD (Create, Read, Update, Delete) application in Node.js and PostgreSQL.

## QuickStart

Create a .env file with the necessary variables indicated in .env.example

`Run npm install` followed by `npm run dev`

## Project Architecture

**Routes:** ./routes/index.js

**Controllers:** ./controllers/index.js

- The role of controllers is to render the view with dynamic data. They call methods from the dataMapper to retrieve the data.

**DataMapper:** ./controllers/dataMapper.js

- The role of the dataMapper is to perform database queries and return the results as is (whether it's data or an error).
