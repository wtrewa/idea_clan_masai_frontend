
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Layout, { Content } from 'antd/es/layout/layout'
import { Footermain } from '../../components/Footer'
import { Card, Typography, theme } from 'antd'
import moment from 'moment'

export const StudentDash = () => {
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
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
        <Card title="DSA Course">
      <Card  type="inner" title="Upcomming Lecture" extra={<a href="#">More</a>}>
        <Card style={{display:'flex',justifyContent:'space-between',}}>
            <a href=""><Typography.Title style={{color:'blue',textDecorationLine:"underline"}}>DSA ARRAY CLASS 1</Typography.Title></a>
        <Typography.Text>{currentTime}</Typography.Text>
        </Card>
      </Card>
      <Card  type="inner" title="Upcomming Lecture" extra={<a href="#">More</a>}>
        <Card style={{display:'flex',justifyContent:'space-between',}}>
            <a href=""><Typography.Title style={{color:'blue',textDecorationLine:"underline"}}>DSA ARRAY CLASS 1</Typography.Title></a>
        <Typography.Text>{currentTime}</Typography.Text>
        </Card>
      </Card>
     </Card>
        </Content>
        </Layout>
        <Footermain/>
        </Layout>
    </div>
  )
}