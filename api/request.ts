import React from 'react'
import { Divider, notification } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import ky from 'ky'

const api = ky.extend({
    hooks: {
        afterResponse: [
            async (_request, _options, response) => {
                const res = (await response.json()) as API.Response<{}>
                if (res.code !== 0) {
                    notification.error({
                        message: '接口报错',
                        description: res.msg,
                    })
                }
            },
        ],
    },
})

export default api
