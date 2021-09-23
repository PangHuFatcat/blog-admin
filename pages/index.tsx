import React, { useCallback, useEffect } from 'react'
import { NextPage } from 'next'
import { Table, Tag, Space } from 'antd'
import PageLayout from 'components/PageLayout'

import { getPost } from 'api/index'
import { ColumnsType } from 'antd/lib/table'

interface DataItem {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
}

const columns: ColumnsType<DataItem> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
]

const data: DataItem[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
]

const Home: NextPage = () => {
    useEffect(() => {
        getInfo()
    })

    const getInfo = useCallback(async () => {
        try {
            const res = await getPost()
            console.log(res, 'res')
        } catch (err) {
            console.log('try.catch.getInfo.err: ', err)
        }
    }, [])

    return (
        <PageLayout>
            {/* <p></p> */}
            <Table columns={columns} dataSource={data} />
        </PageLayout>
    )
}

export default Home
