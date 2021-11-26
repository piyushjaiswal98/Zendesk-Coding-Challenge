const express = require('express')
const fetch = express.Router()
const request = require('request');

fetch.get('/', function(req, res) {

    var options = {
    'method': 'GET',
    'url': 'https://zccstudents3001.zendesk.com/api/v2/tickets.json',
    'headers': {
        'Authorization': 'Basic amFpc3dhbDhAcHVyZHVlLmVkdTpQaXl1c2hAMTIzNDU='
    }
    };

    request(options, function (error, response) {
    if (error) 
    {
        res.send({
            'err':error,
            'data':[]
        })
    }
    else{
        res.send(response.body);
    }
    
    });

});

module.exports = fetch;