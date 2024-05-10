"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'



const Product = ({item}) => {
  return (
    <Container>
    <Row>

    {item.map(item=>(
        <Col xs={4}>
            <Card >
            <Image
      src={`http://localhost:8000${item.image}`}
      width={300}
      height={300}
      alt="Picture of the author"
    />
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{ __html: item.description }}>
  
                
                </Card.Text>
                <p>
                    {item.salesprice ? <span><del>{item.regularprice}</del>-{item.salesprice}</span> : item.regularprice}
                </p>
                </Card.Body>
            </Card>
        </Col>
    ))}

       
       

    </Row>
    </Container>

  )
}

export default Product