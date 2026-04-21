# MongoDB: Fundamentals and Quick Reference Guide

## Core Concepts
- Like we have table in sql, same we have collection in mongoDB, collection is a group of documents, and document is a set of key-value pairs.
     - Example:
          - Like a collection of users, each user is a document with fields like name, email, age, etc.
          - Instagram posts, each post is a document with fields like caption, imageUrl, likes, comments, etc.  

- MongoDB is a NoSQL database, which means it doesn't use tables and rows like traditional SQL databases. Instead, it uses collections and documents to store data.

There is Thousand of documents inside a collection. Each are like a JSON object, and the can have different fields and structure. This is one of the key features of MongoDB, it allows for flexible and dynamic schemas, which can be very useful for certain types of applications.

## Installation and Setup
- To install MongoDB, you can follow the official documentation for your operating system: https://www.mongodb.com/docs/v7.0/installation/
     - it has proper steps to install MongoDb on various OS.

- For particular MacOS, after installling we have to activate that by running the command `brew services start mongodb-community@7.0` in terminal, this will start the MongoDB service and allow you to use it on your machine.
> Note: This will keep started MongoDB service in background, so you can use it whenever you want without starting it again, if you want to stop it, you can run the command `brew services stop mongodb-community@7.0` in terminal.

- Then use `mongosh` command to start the MongoDB shell, which allows you to interact with the database and run commands.

## Commands to interact with MongoDB
- **show dbs**: This command is used to show all the databases in MongoDB.
- **use <database_name>**: This command is used to switch to a specific database. If the database does not exist, it will be created when you first store data in it.
- **show collections**: This command is used to show all the collections in the current database.
- **db.<collection_name>.find()**: This command is used to retrieve all documents from a specific collection.
- **db.<collection_name>.insertOne()**: This command is used to insert a new document into a specific collection.
- **db.<collection_name>.updateOne()**: This command is used to update existing documents in a specific collection.
- **db.<collection_name>.deleteOne()**: This command is used to delete documents from a specific collection

## Difference between insert vs insertOne vs insertMany

| Method       | Target     | Status  | Use Case                          |
|--------------|------------|---------|-----------------------------------|
| insertOne()  | 1 Document | Current | Inserting a single object. |
| insertMany() | Multiple   | Current | Inserting an array of objects.     |
| insert()     | Either     | Legacy  | Avoid. It is deprecated in the Node.js driver. |