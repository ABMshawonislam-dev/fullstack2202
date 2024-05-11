"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import { Metrophobic } from 'next/font/google';





const Product = ({item}) => {

  let handleClick = async (item)=>{
    const res = await fetch('http://localhost:8000/api/v1/product/createcart',
   {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({productId: item._id,quantity:1,cartOwnerId:"654e289f24596d19a0b9a37e"})
   }
    )
      if (!res.ok) {
      
        throw new Error('Failed to fetch data')
      }
 

      console.log(res)
  }


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
                <Button onClick={()=>handleClick(item)} variant="warning">Add to Cart</Button>
            </Card>
        </Col>
    ))}

       
       

    </Row>
    </Container>

  )
}

export default Product