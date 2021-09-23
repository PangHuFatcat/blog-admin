import request from './request'

/**
 * 获取帖子列表接口
 *  */
const getPost = () =>  {
    return request.get('/api/post/get').json()
}

export {
    getPost
}