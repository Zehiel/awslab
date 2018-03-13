//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

    ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

    var params = {
    DryRun: false
    };

    // Call EC2 to retrieve the policy for selected bucket
    ec2.describeInstances(params, function(err, data) {
    if (err) {
        callback(err.stack);
    } else {
        callback(null,JSON.stringify(data));
    }
    });
	
}

exports.lab = task