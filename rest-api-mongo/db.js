var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost/BOT-Tgr2019';
// var databaseUrl1 = 'mongodb://localhost/BeaconData';
var collections = ['SensorData'];
var collections1 = ['BeaconData'];



// var collections1 = ['P-IN'];
var option = {"auth":{"user":"admin","password":"tgr2019"}}
var connect = mongojs(databaseUrl, collections,collections1);
// var connect1 = mongojs(databaseUrl1, collections1);

module.exports = {
    connect: connect
};
