Chronicle - A Writer's Aide
======
**Live App** : [https://chronicle-client.netlify.com/](https://chronicle-client.netlify.com/)

**Server** : [https://chronicle-server.herokuapp.com/](https://chronicle-server.herokuapp.com/)


Summary
------
Welcome to Chronicle! This web app is a writer's tool to help organize the characters, plots, settings and general information of your stories. By providing a standardized means of input, Chronicle gives writers a birds-eye view of the where their world needs fleshing out and what can be improved. See from a glace which aspects need more information and which ones are ready to be used!

In all users are able to:
* **Create** multiple new stories and add general information, characters, world building and plot points
* **Update** existing stories at any time due to database persistance
* **Delete** unnecessary story aspects or the entire story itself
* **Protect** your ideas behind a secure login.



Screenshots
------

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
* `package.json` - This file ennumerates all dependencies of the app and their versions
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
