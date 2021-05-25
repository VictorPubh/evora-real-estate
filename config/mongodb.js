const { MongoClient } = require('mongodb')

let db
let URI = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB

let chachedClient = null
let cachedDb = null

if (!URI) {
    throw new Error(
        'O URI da conexão não está definido.'
    )
}

if (!dbName) {
    throw new Error(
        'O DB (name) da conexão não está definido.'
    )
}

export const client = new MongoClient(URI, {
    poolSize: 15,
    useUnifiedTopology: true,
    useNewUrlParser: true
})

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb
    }

    try {
        await client.connect()
        const db = client.db(dbName)

        const properties = db.collection('properties')
        const carousel = db.collection('carousel')

        cachedDb = db
        chachedClient = client

        return {
            db,
            client,
            properties,
            carousel
        }
    } catch(err) {
        console.log(err)
    }
}

export default connectToDatabase
