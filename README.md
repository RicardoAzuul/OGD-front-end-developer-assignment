# OGD-front-end-developer-assignment
A simple webapp that takes JSON data containing bank account info from an API server and displays it on a page.

### Contributing

To contribute, change the code in the following files:
- app.js, in the root of the project.
- main.css, in the root of the project.
- index.html, in the frontendserver directory of the project.

After your changes, run the build command, run the test, start the api and frontend server and then browse to http://localhost:3000 to open the webpage.

## Building the webapp

To build the webapp:
```
npm run build
```
If you want to build just parts:
to copy the CSS file to the build directory:
```
npm run build-css
```
to copy the frontendserver and index.html to the build directory:
```
npm run build-frontendserver 
```
to copy the JS file to the build directory:
```
npm run build-js
```

### Running the webapp

Starting the api :
```
npm run start-api
```

Starting the frontend server: 
```
npm run start-frontend
```

With both servers running you can test the webapp.

## Running the tests

npm test will run a few tests to see if everything is ready for production:
- check if the API server is running by checking if it returns data.
- check if the HTML file is present in the build folder and being served by the Express server by doing an HTTP request for it.
- check if the CSS file is present in the build folder and being served by the Express server by doing an HTTP request for it.
- check if the JS file is present in the build folder and being served by the Express server by doing an HTTP request for it.


## Built With

* Express: to serve the files needed for the frontend.
* Mocha and Chai: for testing if the app is ready for production.

## Authors

* **Richard Blaauw** - *Initial work* - [RicardoAzuul](https://github.com/RicardoAzuul)



