import type { NextPage } from 'next'
import LoginLayout from 'components/LoginLayout'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import api from 'api/index'
import styles from './index.module.scss'
import { useState } from 'react'

const Home: NextPage = () => {
    const [loading, setLoading] = useState(false)

    const onFinish = async (values: API.User.Login) => {
        setLoading(true)

        const res = await api.user.postLogin(values)
        if (!res) return

        console.log(res)
        setLoading(false)
    }
    return (
        <LoginLayout>
            <Form
                name="login"
                className={styles.login}
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item name="account" rules={[{ required: true, message: '请输入您的账号!' }]}>
                    <Input prefix={<UserOutlined />} placeholder="账号" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: '请输入您的密码!' }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </LoginLayout>
    )
}

export default Home
