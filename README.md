# OGD-front-end-developer-assignment
A simple webapp that takes JSON data containing bank account info from an API server and displays it on a page.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo



### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Building the webapp

To build the webapp run 
```
npm run build
```
If you want to build just parts:
to copy the CSS file to the build directory
```
npm run build-css
```
to copy the frontendserver and index.html to the build directory
```
npm run build-frontendserver 
```
to copy the JS file to the build directory
```
npm run build-js
```

### Running the webapp

Starting the api 
```
npm run start-api
```

Starting the frontend server 
```
npm run start-frontend
```

With both servers running you can test the webapp.

## Running the tests

npm test will run a few tests to see if everything is ready for production:
- check if the API server is running by seeing if it returns data
- check if the HTML file is present in the build folder and being served by the Express server by doing an HTTP request for it
- check if the CSS file is present in the build folder and being served by the Express server by doing an HTTP request for it
- check if the JS file is present in the build folder and being served by the Express server by doing an HTTP request for it




## Built With

* Express: to serve the files needed for the frontend
* Mocha and Chai: for testing if the app is ready for production

## Authors

* **Richard Blaauw** - *Initial work* - [RicardoAzuul](https://github.com/RicardoAzuul)



