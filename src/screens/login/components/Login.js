import React from 'react'
import { Row, Col, Typography, Card } from 'antd'

const { Text, Title } = Typography;

const Login = ({handleLogin}) => {
  return (
    <Row>
      <Col className='login-container' span={12} offset={6}>
        <Card className='login-card'>
          <Row>
            <Col className='title-container' span={24}>
              <Title>Login</Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default Login

//onfinish callback handleLogin
