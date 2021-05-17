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

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb
    }
    const client = new MongoClient(URI, {
        poolSize: 15,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    try {
        await client.connect()
        const db = client.db(dbName)

        // Collections
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
    } finally {
        client.close()
        console.log('A conexão com o MongoDB foi finalizada.')
    }
}

export default connectToDatabase
