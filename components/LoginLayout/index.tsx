import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import styles from './index.module.scss'

interface Props {
    title?: string
}

const PageLayout = (props: PropsWithChildren<Props>) => {
    const { children, title = 'PangHu Admin' } = props
    return (
        <div className={styles.layout}>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="周广俊, 前端, 博客, Blog, 简历, 后台, Admin" />
                <meta name="description" content="Panghu的博客管理后台, 审核、编辑、置顶帖子☘️" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

export default React.memo(PageLayout)
