// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb')

const id = new ObjectId()

console.log(id)

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {
    if (error) {
        console.log('unable to connect to database!')
    }

    const db = client.db(databaseName)

    
})