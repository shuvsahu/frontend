import React from 'react'
import { Row, Col } from 'antd'
import Title from 'antd/es/typography/Title'
import {CustomMenu} from '../../Menu'

const CustomHeader = () => {
  return (
    <Row >
        <Col span={24}>
            <Row>
            <Col span={4.5} offset={1}>
                <Title style={{margin:10,color:"#fff",WebkitTextStroke:"1px black"}}>GetYourFood</Title>
            </Col>
            <Col span={5.5} offset={14} style={{display:"flex",justifyContent:"center"}}>
                <CustomMenu />
            </Col>
        </Row>
        </Col>
    </Row>
  )
}

export default CustomHeader


// <div>
    //   <Row>
    //     <Col span={12} style={{border: "5px solid black"}}>
    //         <Title style={{margin:10,color:"#fff",WebkitTextStroke:"1px black"}}>GetYourFood</Title>
    //     </Col>
    //     <Col  span={12}>
    //         <PublicMenu />
    //     </Col>
    //   </Row>
    // </div>
