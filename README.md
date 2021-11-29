# Zendesk-Coding-Challenge

The Code is divided into two sections:
1.) Node APIs
2.) React App

## Node API
The Node APIs fetch data directly from the zendesk. Users need to specify their {emai:password} as a Base64 encoded string in the Authorization headers of the APIs. This is required to facilitate Basic Auth on Zendesk server.
There is an encoder provided in the `index.js` file.
