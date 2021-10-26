var settings = require('../settings');
const { MongoClient } = require('mongodb');
// Db = require('mongodb').Db,
// Connection = require('mongodb').Connection,
// Server = require('mongodb').Server;

// module.exports = new Db(settings.db, new Server(settings.host, settings.port),{sage: true})


var url = 'mongodb://localhost:27017';
var client = new MongoClient(url);
var dbName = 'blog';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    var db = client.db(dbName);
    var collection = db.collection('documents');
    // the following code examples can be pasted here...
    return 'done.';
  }
  
module.exports = main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());