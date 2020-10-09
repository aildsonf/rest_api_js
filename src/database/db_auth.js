// note: using a connection string for node.js 2.2.12 or later versions
const db_auth =
  "mongodb://uername:password@cluster0-shard-00-00.9t58x.mongodb.net:27017,cluster0-shard-00-01.9t58x.mongodb.net:27017,cluster0-shard-00-02.9t58x.mongodb.net:27017/project?ssl=true&replicaSet=atlas-myg7c3-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports = db_auth;
