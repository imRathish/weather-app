const request  = require('request');

request('http://www.google.com',(error,response,body) => {
    console.log(error);
    console.log(response);
   // console.log(body);
    
})