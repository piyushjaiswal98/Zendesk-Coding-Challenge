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
The Node APIs fetch data directly from the zendesk servers. Users need to specify their {email:password} as a Base64 encoded string in the Authorization headers of the APIs. This is required to facilitate Basic Auth on Zendesk server.<br/>
There is an encoder provided in the `index.js` file.
```
let data = 'email:address:password';
let buff = new Buffer.from(data);
let base64data = buff.toString('base64');
```
The APIs fetch the data from the server and host them at an endpoint from where the web app fetches and displays it.<br/>
The APIs are unit tested and the test codes are provided in the `test` folder.<br/>
Tests are carried out using the `mocha` and `chai` testing libraries.<br/>
To Test the App run the following command.<br/>
```
npm test
```
To run the node app execute the following command.<br/>
```
node index.js
```
This will start a node server at `port:2000`.<br/>

## React App
The React App displays the Tickets to the users.<br/>
Users have a choice between being able to view all the tickets or search for a particular ticket via it's Ticket Id.<br/>
Each Ticket stamp expands on clicking to display additional details associated with the ticket.<br/>
The Ticket view is paginated with each page containing a maximum of 25 tickets.<br/>
To Run the App execute the following command.<br/>
```
npm start
```
Each of the components are unit tested and a test snapshot exists for each of them in their respective `__tests__` folders.<br/>
Unit tests are carried out using the `@testing-library/react` and `react-test-renderer`<br/>
To Test the components run the following command.<br/>
```
npm test
```
