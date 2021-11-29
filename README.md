# Zendesk-Coding-Challenge

## Requirements
`NodeJS` is required to run the application. You can download it from here.<br/>
https://nodejs.org/en/
<br/>
Clone the Repository and insta
The Code is divided into two sections:<br/>
1.) Node APIs<br/>
2.) React App

## Node API
The Node APIs fetch data directly from the zendesk. Users need to specify their {emai:password} as a Base64 encoded string in the Authorization headers of the APIs. This is required to facilitate Basic Auth on Zendesk server.<br/>
There is an encoder provided in the `index.js` file.
```
let data = 'email:address:password';
let buff = new Buffer.from(data);
let base64data = buff.toString('base64');
```
<br/>
The APIs fetch the data from the server and host them at an endpoint from where the web app fetches and displays it.<br/>
