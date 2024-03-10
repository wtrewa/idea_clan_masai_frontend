import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { Card, Layout, Menu, theme } from 'antd'
import { DashboardFilled, DashboardOutlined, HomeOutlined, LaptopOutlined, NotificationOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'





const Sidebar = props => {

  useEffect(()=>{
    fetch('https://idea-clan-masai-backend.onrender.com/api/courses').then((res =>res.json())).then(data=>console.log(data))
  },[])


  const items2 = [UnorderedListOutlined , NotificationOutlined ].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `${index===0?'Courses':"Notifictions"}`,
      children: new Array(2).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <div>
         
          <Sider style={{ background: colorBgContainer }} width={200}>
          {/* <Card title="Card title" bordered={false} style={{ width: 300 }/> */}
          <Link to={'/studentdash'}>
          <Card title='Dashboard'  bordered='false' style={{width:'100%'}}>
          <HomeOutlined/>
          </Card>
          </Link>
            <Menu
            
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar