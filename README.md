Please refer to this repo for the backend of this project - https://github.com/rlj0713/tripDesk

Walkthrough of TripDesk - https://youtu.be/VvCnDM0UWg0

Name: TripDesk

Description: This application serves as a custom reservation system for a tour-guide company.  The front-desk staff is in charge of keeping track of reservations and assigning guides to work those reservations.  This application keeps track of those reservations and displays a calendar to keep everyone on the same page.

Installation: To host this application or add to the project: 1) Fork this repo along with the backend package. 2) On the rails backend: a) run bundle install b) rails db:migrate & rails db:seed c) boot up a server with rails s 3) Open the application locally using npm install followed by npm start.

To host externally make sure you upgrade the back-end database from sqlite3 to postgres.
Support: Please e-mail me directly at rlj0713@gmail.com for help and tips on how to make this work on your machine.

Contributing: Please fork this repo and add to my project. All code here is open-source and free to use.

Project Status: This is a stand-alone project with no anticipated regular maintenance.

Project Requirements:

5 min explanation of concept: https://youtu.be/VvCnDM0UWg0

Blog Post: ############################################

Project Requirement Checklis:

[X]  The code should be written in ES6 as much as possible
[X]  Use the create-react-app generator to start your project.
[X]  Follow the instructions on this repo to setup the generator: create-react-app (Links to an external site.)
[X]  Your app should have one HTML page to render your react-redux application
[X]  There should be 5 stateless components
        - CustomerList.js
        - GuideList.js
        - Navigation.js
        - Reservation.js
        - ReservationList.js
        - There are also multiple actions that are stateless
[X]  There should be 3 routes
        - /reservations/new'
        - /reservation/:id'
        - /reservations'
        - /guides/new'
        - /guides'
        - /customers/new'
        - /customers'

[X]  The Application must make use of react-router and proper RESTful routing.
[X]  Use Redux middleware to respond to and modify state change
[X]  Make use of async actions and redux-thunk middleware to send data to and receive data from a server
[X]  Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
[X]  Your client-side application should handle the display of data with minimal data manipulation
[X]  Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
[X]  Once your app is complete, fill out this checklist.