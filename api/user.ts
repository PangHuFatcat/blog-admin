import { ColumnsType } from 'antd/lib/table';
import request from './request'
import qs from 'qs'

/**
 * 登录
 *  */
const postLogin = async (body: API.User.Login) => {
    try {
        const res = await request
            .post('/api/user/login', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: qs.stringify(body),
            })
            .json<API.User.PostLoggedRes>()
        return res.data
    } catch (err) {
        console.log('try.catch.postLogin.err: ', err)
    }
}

export { postLogin }
