import React, { useCallback, useEffect } from 'react'
import { NextPage } from 'next'
import { Table, Tag, Space } from 'antd'
import PageLayout from 'components/PageLayout'

// import { getPost } from 'api/index'
import { ColumnsType } from 'antd/lib/table'

const Resume: NextPage = () => {
    // useEffect(() => {
    //     getInfo()
    // })

    // const getInfo = useCallback(async () => {
    //     try {
    //         const res = await getPost()
    //         console.log(res, 'res')
    //     } catch (err) {
    //         console.log('try.catch.getInfo.err: ', err)
    //     }
    // }, [])

    return <PageLayout>简历</PageLayout>
}

export default Resume
