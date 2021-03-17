var request = require('request');
request.get('http://127.0.0.1:8081/listUsers', function (error, response, body) {
request.post('http://127.0.0.1:8081/listUsers', {form:{key:'value'}})
	    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
     }
});


