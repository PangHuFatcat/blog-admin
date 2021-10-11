import React, { useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Table, Form, Space, Button, Select } from 'antd'
import PageLayout from 'components/PageLayout'
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import styles from './index.module.scss'
import api from 'api/index'

const columns: ColumnsType<API.Post.Item> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button icon={<FormOutlined />} size="small">
                    编辑
                </Button>
                <Button icon={<DeleteOutlined />} size="small" danger>
                    删除
                </Button>
            </Space>
        ),
    },
]

const Home: NextPage = () => {
    const [data, setData] = useState<API.Post.Item[]>([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = useCallback(async () => {
        setLoading(true)

        const res = await api.post.getPost()
        if (!res) return

        setData(res)
        setLoading(false)
    }, [])

    return (
        <PageLayout>
            <div className={styles.tableLayout}>
                <div className={styles.tableHeader}>
                    <Form layout="inline">
                        <Form.Item name="status" label="状态">
                            <Select defaultValue="" style={{ width: 120 }}>
                                <Select.Option value={''}>全部</Select.Option>
                                <Select.Option value={1}>上架</Select.Option>
                                <Select.Option value={2}>下架</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                搜索
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">新增</Button>
                        </Form.Item>
                    </Form>
                </div>
                <Table rowKey="id" loading={loading} columns={columns} dataSource={data} />
            </div>
        </PageLayout>
    )
}

export default Home
