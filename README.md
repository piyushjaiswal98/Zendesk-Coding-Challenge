# Zendesk-Coding-Challenge

## Requirements
`NodeJS` is required to run the application. You can download it from here.<br/>
https://nodejs.org/en/
<br/>
## Steps
Clone the Repository and install all the dependencies.<br/>
Visit both the `Node` and `React` folders and execute the following command in each of them.<br/>
```
npm install
```
## Code
The Code is divided into two sections:<br/>
1.) Node APIs<br/>
2.) React App

## Node API
The Node APIs fetch data directly from the zendesk servers. Users need to specify their {emai:password} as a Base64 encoded string in the Authorization headers of the APIs. This is required to facilitate Basic Auth on Zendesk server.<br/>
There is an encoder provided in the `index.js` file.
```
let data = 'email:address:password';
let buff = new Buffer.from(data);
let base64data = buff.toString('base64');
```
<br/>
The APIs fetch the data from the server and host them at an endpoint from where the web app fetches and displays it.<br/>
The APIs are unit tested and the test codes are provided in the `test` folder.<br/>
To run the node app execute the following commande.<br/>
```
node index.js
```
```
let data = 'email:address:password';
let buff = new Buffer.from(data);
let base64data = buff.toString('base64');
```
This will start a node server at `port:2000`.<br/>

## React App
