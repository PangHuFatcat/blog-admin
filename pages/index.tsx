import React, { useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Table, Space } from 'antd'
import PageLayout from 'components/PageLayout'

import api from 'api/index'
import { ColumnsType } from 'antd/lib/table'

const columns: ColumnsType<API.Post.Item> = [
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
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
                <a>Invite {record.title}</a>
                <a>Delete</a>
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
            <Table rowKey="title" loading={loading} columns={columns} dataSource={data} />
        </PageLayout>
    )
}

export default Home
