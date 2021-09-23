import { NextApiRequest, NextApiResponse } from 'next'
import mongodb from 'lib/mongodb'

export interface Post {
    title: string
    content: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<API.Post.GetPostRes>) {
    const client = await mongodb()

    const database = client.db('test_db')

    const posts = database.collection<Post>('post')

    const postArray = await posts.find<Post>({}, { projection: { _id: 0 } }).toArray()

    res.status(200).json({
        code: 0,
        msg: '',
        data: postArray
    })
}
