import React, { PropsWithChildren } from 'react'
import { Menu, Dropdown, Button, Space } from 'antd'
import { BookOutlined, LoginOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import styles from './index.module.scss'

const { SubMenu } = Menu

interface Props {}

const Header = (props: PropsWithChildren<Props>) => {
    return (
        <div className={styles.header}>
            <div></div>
            <Menu mode="horizontal" className={styles.menu}>
                <Menu.Item key="mail" icon={<BookOutlined />}>
                    帖子管理
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="配置管理">
                    <Menu.Item key="setting:1">后台</Menu.Item>
                    <Menu.Item key="setting:2">博客</Menu.Item>
                </SubMenu>
            </Menu>
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item icon={<LoginOutlined />}>退出登录</Menu.Item>
                    </Menu>
                }
                placement="bottomLeft"
            >
                <div className={styles.item}>
                    <Avatar
                        size={32}
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
