import React from 'react'
import Carousel from './Carousel'
import { Row, Col, Typography, Card } from 'antd'
import './style.css';
// import { GET } from '../../../utils/api';
import { useEffect } from 'react';
import axios from 'axios';

const { Text, Title } = Typography;
const { Meta } = Card;

const Home = () => {

  // useEffect(() => {
  //   // axios.get("http://localhost:8080/food")
  //   // .then((res)=> console.log(res))
  //      console.log(GET('http://localhost:8080/food'))
  // },[])
  return (
    // <Row>
    //   <Col span={24}>

    //   </Col>
    // </Row>
    <div className='home'>
      <Row className='row'>
        <Col span={24} className='carousel-container'>
          <Carousel />
        </Col>
      </Row>
      <Row className='row'>
        <Col span={8} offset={8}>
          <Title style={{margin:"0px"}}>About this page</Title>
        </Col>
      </Row>
      <Row className='row'>
        <Col span={22} offset={1} style={{marginTop:"35px"}}>
          <Text>
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, 
          the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
           because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor 
           again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever
             undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault 
             with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces 
             no resultant pleasure?"
             "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, 
          the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
           because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor 
           again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever
             undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault 
             with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces 
             no resultant pleasure?"
          </Text>
        </Col>
      </Row>
      <Row className="row"  style={{marginTop:"50px"}}>
        <Col span={8} className='card-container'>
          <Card
            hoverable
            style={{width: "300px"}}
            cover={<img alt="example" src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1060&t=st=1677338073~exp=1677338673~hmac=3f88fa41d656fd42b10e623e5bb0efc5b808e7bc2899f2fb00a6596d3e6f9136" />}  
          >
            <Meta title="Indian Food" description="Tasty Food" />
          </Card>
        </Col>
        <Col span={8} className='card-container'>
          <Card
            hoverable
            style={{width: "300px"}}
            cover={<img alt="example" src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1060&t=st=1677338073~exp=1677338673~hmac=3f88fa41d656fd42b10e623e5bb0efc5b808e7bc2899f2fb00a6596d3e6f9136" />}  
          >
            <Meta title="Indian Food" description="Tasty Food" />
          </Card>
        </Col>
        <Col span={8} className='card-container'>
          <Card
            hoverable
            style={{width: "300px"}}
            cover={<img alt="example" src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1060&t=st=1677338073~exp=1677338673~hmac=3f88fa41d656fd42b10e623e5bb0efc5b808e7bc2899f2fb00a6596d3e6f9136" />}  
          >
            <Meta title="Indian Food" description="Tasty Food" />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home

//{border: "5px solid black"}

// <div>
    //   <h1>Description</h1>
    //   <p>Lorem ipsum</p>
    //   <Space direction="horizontal" size={20}>
    //     <CustomCard title={"Card 1"} content={<p>This is card 1</p>} style={{width:"200px"}} />
    //     <CustomCard title={"Card 2"} content={<p>This is card 2</p>} />
    //     <CustomCard title={"Card 3"} content={<p>This is card 3</p>} />
    //   </Space>
    // </div>