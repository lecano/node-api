const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    database = client.db('api');
}

function getDb() {
    if (!database) {
        throw new Error('Database not connected.');
    }

    return database;
}

module.exports = {
    initDb: initDb,
    getDb: getDb
}