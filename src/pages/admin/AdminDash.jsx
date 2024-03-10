
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Layout, { Content } from 'antd/es/layout/layout'
import { Footermain } from '../../components/Footer'
import { Card, theme } from 'antd'

export const AdminDash = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <div>
        <Layout>
        <Navbar/>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
        <Sidebar/>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
         content
        </Content>
        </Layout>
        <Footermain/>
        </Layout>
    </div>
  )
}
