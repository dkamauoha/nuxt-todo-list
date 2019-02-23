require('dotenv').config();

let { MONGODB_PASSWORD } = process.env

module.exports = {
  mongodb: {
    url: 'mongodb://dkamauoha:'+ MONGODB_PASSWORD +'@first-cluster-shard-00-00-4khet.mongodb.net:27017,first-cluster-shard-00-01-4khet.mongodb.net:27017,first-cluster-shard-00-02-4khet.mongodb.net:27017/test?ssl=true&replicaSet=First-Cluster-shard-0&authSource=admin&retryWrites=true'
  }
}