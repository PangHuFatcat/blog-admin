import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import mongodb from 'lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse<API.User.PostLoggedRes>) {

    console.log(req)

    console.log(jwt)
    // const client = await mongodb()

    // const database = client.db('test_db')

    // const posts = database.collection<Post>('post')

    // const postArray = await posts.find<Post>({}, { projection: { _id: 0 } }).toArray()

    res.status(200).json({
        code: 0,
        data: {
            token: '233'
        },
        msg: ''
    })
}
