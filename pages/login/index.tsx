import type { NextPage } from 'next'
import LoginLayout from 'components/LoginLayout'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const Home: NextPage = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }
    return (
        <LoginLayout>
            <Form
                name="normal_login"
                className={styles.login}
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item name="username" rules={[{ required: true, message: '请输入您的账号!' }]}>
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
