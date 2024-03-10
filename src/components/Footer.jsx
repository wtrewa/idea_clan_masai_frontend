
import { Footer } from 'antd/es/layout/layout'
import React from 'react'

export const Footermain = () => {
  return (
    <div>
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </div>
  )
}
