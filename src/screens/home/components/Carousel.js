import React from 'react';
import { Carousel, Col, Image, Row } from 'antd';

const contentStyle = {
    height: '300px',
};

const styles = {
    width: '90%',
    height: '100%',
    margin: '0 auto'
}

class HomeCarousel extends React.Component {
    render() {
        return (
            <Carousel autoplay style={styles}>
                <Row>
                    <Col span={24} style={contentStyle}>
                        <Image preview={false} style={{ height: "300px", width: "1360px", border: '5px solid yellow', }} src='https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-
                    bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1060&t=st=1677338073~exp=1677338673~hmac=3f88fa41d656f
                    d42b10e623e5bb0efc5b808e7bc2899f2fb00a6596d3e6f9136' />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={contentStyle}>
                        <Image preview={false} style={{ height: "300px", width: "1360px", border: '5px solid yellow', }} src='https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-
                    bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1060&t=st=1677338073~exp=1677338673~hmac=3f88fa41d656f
                    d42b10e623e5bb0efc5b808e7bc2899f2fb00a6596d3e6f9136' />
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={contentStyle}>
                        <Image preview={false} style={{ height: "300px", width: "1360px", border: '5px solid yellow', }} src='https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-
                    bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1060&t=st=1677338073~exp=1677338673~hmac=3f88fa41d656f
                    d42b10e623e5bb0efc5b808e7bc2899f2fb00a6596d3e6f9136' />
                    </Col>
                </Row>
            </Carousel>
        );
    }
}

export default HomeCarousel;
