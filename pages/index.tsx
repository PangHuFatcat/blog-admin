import React, { useCallback, useEffect } from 'react'
import { NextPage } from 'next'
import { Button } from 'antd'
import PageLayout from 'components/PageLayout'
import Header from 'components/Header'

import { getPost } from 'api/index'

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
            <Header></Header>
            <p></p>
            <Button type="primary">主页</Button>
        </PageLayout>
    )
}

export default Home
