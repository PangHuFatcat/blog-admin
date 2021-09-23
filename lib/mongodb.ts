import { MongoClient, MongoClientOptions } from 'mongodb'

// 开发模式避免热更时候频繁连接
async function dbDev(uri: string, options: MongoClientOptions) {
    let client: MongoClient

    // @ts-ignore
    if (!global._mongoClientConnect) {
        client = new MongoClient(uri, options)
        // @ts-ignore
        global._mongoClientConnect = client
    } else {
        // @ts-ignore
        client = global._mongoClientConnect
    }

    try {
        await client.connect()
    } catch (err) {
        console.log('try.catch.dbDev.err: ', err)
        client.close()
        console.log('db.close')
    }

    return client
}

async function dbPrd(uri: string, options: MongoClientOptions) {
    const client = new MongoClient(uri, options)

    try {
        await client.connect()
    } catch (err) {
        console.log('try.catch.dbPrd.err: ', err)
        await client.close()
        console.log('db.close')
    }

    return client
}

function db() {
    const options: MongoClientOptions = {}

    if (!process.env.MONGODB_URI) {
        throw new Error('似乎在 .env 里面没有配置 MONGODB_URI')
    }

    if (process.env.NODE_ENV === 'development') {
        return dbDev(process.env.MONGODB_URI, options)
    } else {
        return dbPrd(process.env.MONGODB_URI, options)
    }
}

export default db
