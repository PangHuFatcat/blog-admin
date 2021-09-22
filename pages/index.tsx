import type { NextPage } from 'next'
import { Button } from 'antd'
import PageLayout from 'components/PageLayout'

const Home: NextPage = () => {
    return (
        <PageLayout>
            <Button type="primary">按钮</Button>
        </PageLayout>
    )
}

export default Home
