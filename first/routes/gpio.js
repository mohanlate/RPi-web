var express = require('express');
var router = express.Router();
var gpio = require("pi-gpio");


/* GET params. */
router.get('/', function(req, res) {
  	var pin = req.params.pin;
	res.send('Turning ON the pin ' + pin);
/*	gpio.open(pin, "output", function(err) {
    		gpio.write(pin, 0, function() {
	        	gpio.close(pin);
    		});
	});
*/
});

module.exports = router;
