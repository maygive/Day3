var mongojs = require('mongojs');

// var databaseUrl = 'mongodb://localhost/SensorData';
var databaseUrl1 = 'mongodb://localhost/BeaconData';
// var collections = ['Temperature'];



var collections1 = ['P-IN'];
var option = {"auth":{"user":"admin","password":"tgr2019"}}
// var connect = mongojs(databaseUrl, collections);
var connect1 = mongojs(databaseUrl1, collections1);

module.exports = {
    connect: connect1
};
