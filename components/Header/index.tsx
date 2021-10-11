import React, { PropsWithChildren } from 'react'
import { Menu, Dropdown } from 'antd'
import { BookOutlined, LoginOutlined, FileTextOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { useRouter } from 'next/router'
import { MenuInfo } from 'rc-menu/lib/interface'
import styles from './index.module.scss'

interface Props {}

const Header = (props: PropsWithChildren<Props>) => {
    const router = useRouter()

    const { pathname } = router

    const handleClick = ({ key }: MenuInfo) => {
        if (pathname === key) return
        router.push(key)
    }

    return (
        <div className={styles.header}>
            <div></div>
            <Menu
                mode="horizontal"
                className={styles.menu}
                defaultSelectedKeys={[pathname]}
                onClick={handleClick}
            >
                <Menu.Item key="/" icon={<FileTextOutlined />}>
                    帖子管理
                </Menu.Item>
                <Menu.Item key="/resume" icon={<BookOutlined />}>
                    简历管理
                </Menu.Item>
            </Menu>
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item key="exit" icon={<LoginOutlined />}>
                            退出登录
                        </Menu.Item>
                    </Menu>
                }
                placement="bottomLeft"
            >
                <div className={styles.item}>
                    <Avatar
                        size={26}
                        src="/images/avatar.jpeg"
                        style={{
                            border: '1px solid #e8e8e8',
                            marginRight: 10,
                        }}
                    />
                    PangHu
                </div>
            </Dropdown>
        </div>
    )
}

export default React.memo(Header)
