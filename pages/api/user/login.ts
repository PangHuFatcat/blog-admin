import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import mongodb from 'lib/mongodb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<API.User.PostLoggedRes>
) {

    if (req.method !== 'POST') {
        res.status(200).json({
            code: -1,
            msg: '参数错误',
        })
    }

    if (req.body.account !== '1') {
        res.status(200).json({
            code: -1,
            msg: '似乎没有这个账号',
        })
    }    

    // console.log(jwt)
    // const client = await mongodb()

    // const database = client.db('test_db')

    // const posts = database.collection<Post>('post')

    // const postArray = await posts.find<Post>({}, { projection: { _id: 0 } }).toArray()

    res.status(200).json({
        code: 0,
        data: {
            token: '233',
        },
        msg: '',
    })
}
