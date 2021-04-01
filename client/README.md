# USER STORY

```
as an end user when i navigate to the website
i am presented with a login menu where i enter my username and password
if i do not have a username and password i can select 'sign up' to create a user account
when i create a user account i am presented with three user role options (admin, read/write, read only)
when i log in to my profile as an admin i am prestend with a covid screening form
as an admin user i am allowed to add options to the symptoms dropdown menu and/or fill out and submit a form and add a new user
when i log in to my profile as a basic user i am presented with the option to fill out and submit a form
when i log into my profile as a read only user i am presented with a form that i cannot edit or submit
as any user when i am done with my session i can select an option to logout and will be routed back to the login screen
```

## WEB PAGE(s)

- Login/Signup
- Landing Page
- \*Conditionally renders based on roles
- \*\*IF admin -> ability to add user, fill out form, or view data (can be as simple as three buttons) NOTE: fucntion over anything
- \*\*IF read/write -> ability to fill out form or view data
- \*\*IF read only -> displays the data only
- Data View (MVP Only - Not required for class project)
- \*Queries (To Write)
- \*\* Count by symptoms
- \*\* Positive contacts
- \*\* Positive tests

## ROLES AND PERMISSIONS

- "Admin": can create new users, can fill out a form, can view data
- "Read/Write" (was Manager): can fill out a form, can view data
- "Read Only" (was Director): can only view data

## PROJECT CRITERIA

- Performant JavaScript
- NoSQL databases
- Progressive Web Application (PWA)
- React single-page application
- GraphQL APIs
- Concurrent servers in a MERN application
- Authentication

## PROJECT REQS

- React for the front end
- GraphQL with a Node.js and Express.js server
- Use MongoDB and the Mongoose ODM for the database
- Use queries and mutations for retrieving, adding, updating and deleting data
- Deploy to Heroku (with data)
- Be POLISH
- PWA (web manifest, service workers, is installable)
- Responsive UI
- Be interactive
- JWT Authentication
- Protect sensitive API key information on the server
- Clean repo and high quality readme
- Add to your react portfolio

## HOW TO USE

- Our application utilizes service workers, so when you navigate to the production site you will be presented with an option in your browser to install Whatever Works 2.0. The application can be used in an on or offline state, either via the web browser or locally installed package.
- If you would like to download the reporsitory and modify our app, follow the steps below:
- \*\* clone the repository to your local machine and run the file in your text editor
- \*\* before you get started on modifying the code, run 'npm install' to make sure you have all of the dependencies required run the application locally
- \*\* once you are ready to start testing changes, run "npm start" to launch the server - the app will then be available at your localhost
- \*\* if you would like to test the service workers package, use your terminal to navigate to the client file and then run "npm build"
- \*\* if you are testing service workers, follow the terminal prompts to serve the build
- \*\* once the build has been served, utilize your browser dev tools to find the service workers interface

** Happy coding **

## TEAM STRENGTHS

- Clint Strange: boss man with user authentication and extremely proficcient with es6, team leader
- Nathan Potts: guy can render data with the best of them, proficcient with conceptulization and execution of anything react/jsx
- Tony Potts: database guru, skilled with database architecture and producing the framework modules and mutations for our application
- Jake Nystrom: project manager, focused on ensuring progressive web application requirements were met and dabbled in UI/UX
- Will Pearson: glue bond for the team, conceptualizes ideas and organizes project requirements so the rest of us can execute

# Beta Mock-Up(s)

![Beta Login Image](./src/assets/images/beta-login.png)
