Chronicle - A Writer's Aide
======
**Live App** : [https://chronicle-client.netlify.com/](https://chronicle-client.netlify.com/)

**Server** : [https://chronicle-server.herokuapp.com/](https://chronicle-server.herokuapp.com/)

**Server Repository** : [https://github.com/mdargitz/chronicle-server](https://github.com/mdargitz/chronicle-server)


Summary
------
Welcome to Chronicle! This web app is a writer's tool to help organize the characters, plots, settings and general information of your stories. By providing a standardized means of input, Chronicle gives writers a birds-eye view of the where their world needs fleshing out and what can be improved. See from a glace which aspects need more information and which ones are ready to be used!

In all users are able to:
* **Create** multiple new stories and add general information, characters, world building and plot points
* **Update** existing stories at any time due to database persistence
* **Delete** unnecessary story aspects or the entire story itself
* **Protect** your ideas behind a secure login.



Screenshots
------

### Login
![Chronicle Login page](https://i.imgur.com/HbEwyu5.jpg "Login")

### Register
![Chronicle Register page](https://i.imgur.com/YjIHhCP.png "Register")

### All Stories
![Chronicle all stories page](https://i.imgur.com/wD374rI.png "All Stories")

### General Story Info
![Chronicle general page](https://i.imgur.com/7uJGsXg.png "General")

### Characters
![Chronicle Characters page](https://i.imgur.com/J9ZRkq3.png "Characters")

### Settings
![Chronicle Settings page](https://i.imgur.com/ZYkTUvu.png "Settings")

### Plot Points
![Chronicle Plots page](https://i.imgur.com/i55g8Uw.png "Plots")

### Edit Details
![Chronicle Edit Modal](https://i.imgur.com/dh8P05N.png "Edit")

### About
![Chronicle About Modal](https://i.imgur.com/HGipTmm.png "About")


Tech Stack
------
Chronicle was created with the following languages, libraries and frameworks:

**Database** : Postgresql - Hosted with [Elephant Sql](https://www.elephantsql.com/)

**API** : Node.js, Express.js, Knex.js, Passport.js + Json Web Token

**Client** : React.js, Redux, bootstrapped with Create-React-App, React-Modal, React-Router, React-Form, Redux-Thunk

**Testing** : Mocha & Chai.js, Travis-CI, Jest

**Deployment** : [Heroku](https://www.herokud.com/), [Netlify](https://www.netlify.com/)

Code Tour
------
### Client  

Repository: Here!

To run locally, please download the repository and run `npm install` to download all dependencies.

From a top level, there are three areas of note:
* `/public` - This folder holds the index.html, favicon and manifest
* `package.json` - This file enumerates all dependencies of the app and their versions
* `/src` - The source folder is where most of the hard work happens, and requires further break down.


* `/src/__tests__` : All react and redux test files are stored here. These tests include tests for actions, reducers, connected and unconnected components.
* `/src/actions` : All redux actions can be found in this folder, separated by function

     `/src/actions/login` handles logging in and out of the app as well as storing local tokens
     
     `/src/actions/modal` handles opening and closing modals
     
     `/src/actions/navigation` handles moving around the application programatically
     
     `/src/actions/registration` handles creating a user account
     
     `/src/actions/stories` handles all content CRUD actions for stories, characters, settings & plots

* `/src/components/` : All react components and their styling are stored here, in flat style to aide imports.
* `/src/reducers/` : All redux reducers (including the combining root reducer) are in this folder. Their organization mirrors that of the actions folder.
* `/src/index.js` : Set up all Routes used by the app.
* `/src/setupTests.js` : Set up Jest testing with the correct adapter
* `/src/store.js` : Combine all reducers and make state available in the redux store
* `/src/validators.js` : Helper functions to assist inline form validation

---

### Server
Repository : [https://github.com/mdargitz/chronicle-server](https://github.com/mdargitz/chronicle-server)

The server is written in node.js and express and can similarly be broken into 4 main categories:
* `/db/` : Includes all database seed functions and scripts. Specifically scripts to drop existing tables, create new tables and (optionally) insert seed data.
* `/passport/` : Includes configuration files to set up local and jwt authentication- they also specify that the password not be returned on successful authentication
* `/routes/` : All express routes are in this folder that are then mounted to `server.js`. They include the following: 
`/api/users/`
`/api/auth/`
`/api/stories/`
`/api/characters/`
`/api/settings/`
`/api/plots/`
* `/test/` : All test files for the above routes + `server.js.test` using Mocha, Chai.js and Chai-http.
Finally there are a few other files of note:
* `knex.js` and `knexfile.js`: Configure the knex connection to the postgres database given the current environment
* `package.json` : All dependencies and version numbers for the server
* `server.js` : Instantiates the express app, set up CORS and logging, mount routes and offer handlers for 404's and errors
