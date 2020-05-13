# Blog Backend Part 1 - 

I'm really bored. Quarantine sucks. So I'm going to do something really boring and make a blog.

Why am I doing this?
Um, I don't really know.

I've had trouble finding complete web dev projects online, so why not I'll take a shot at it. Let's start by explaining how I built this blog.

## Tech Stack
I'm going to use Node/Express for my server and MySQL as the database. After doing some research, I came across the Knex.js and Objection.js combo. Knex is a SQL query builder while Objection is an ORM that is built on top of Knex. Knex handles the creation/migration of the database, while Objection handles the modeling of the data. For the front-end I'll use React and host the project on Heroku.

Tech Stack Summary
- Server - Node/Express
- Database - MySQL
- Front-end - React
- Hosting - Heroku


## Setting up the back-end
First I'll initialize the `package.json` file in my project directory 'Blog':
> npm init --yes

Then install all required packages:
> npm i express mysql knex objection

Nodemon is a great tool that automatically restarts the server. The `-D` installs it as a dev dependency:
> npm i -D nodemon

I like adding a `server` script to `package.json`:
```
"scripts": {
    "server": "nodemon server.js"
    ...
}
```

### Defining the models
In order to create the database, we need to know what data is required. I'll start by defining 3 models: users, tags and blogs:
User
- id
- first_name
- last_name
- email
- password
- created_at
- updated_at

Tag
- id
- name
- created_at
- updated_at

Blog
- id
- author_id
- tag_id
- title
- slug
- body
- summary
- created_at
- updated_at

### Knex setup

### Objection setup

### Setting up the database

### Setting up packages

### Setting up backend folder structures

-   models
-   routes
-   controllers

### Setting up Express
