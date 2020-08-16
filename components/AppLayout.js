import React from 'react'
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';

const AppLayout = () => {
  return(
    <div style={{ width:'100%' }}>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><h2><a>Campus+</a></h2></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item><Button>모임개설하기</Button></Menu.Item>
      </Menu>
    </div>
  )
}

export default AppLayout