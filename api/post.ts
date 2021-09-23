import request from './request'

/**
 * 获取帖子列表接口
 *  */
const getPost = async () =>  {
    try {
        const res = await request.get('/api/post/get').json<API.Post.GetPostRes>()
        return res.data
    } catch (err) {
        console.log('try.catch.getPost.err: ', err)
    }
}

export {
    getPost
}