"use client"
import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allcart')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }





const Cart = async () => {
    const data = await getData()


    let increment = async (id,type)=>{
        const res = await fetch(`http://localhost:8000/api/v1/product/createcart?type=${type}`,
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({productId: id})
           }
        )

       
        if (!res.ok) {

          throw new Error('Failed to fetch data')
        }

        console.log(res)
    }

  return (
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>InStock</th>

                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item=>(
                    <tr>
                    <td>{item.productId.name}</td>
                    <td> <button onClick={()=>increment(item.productId._id,"incre")}>+</button> {item.quantity} <button onClick={()=>increment(item.productId._id,"decre")}>-</button></td>
                    <td>
                    <Image
                        src={`http://localhost:8000${item.productId.image}`}
                        width={30}
                        height={30}
                        alt="Picture of the author"
                        />
                    </td>
                    <td>{item.productId.quantity}</td>
                    <td>{item.productId.salesprice ? (item.productId.salesprice) : (item.productId.regularpricey)}</td>
                    <td>{item.productId.salesprice ? (item.productId.salesprice*item.quantity) : (item.productId.regularprice*item.quantity)}</td>
                    </tr>
                ))}
                
            </tbody>
         </Table>
        

         <Table striped bordered hover>
      <thead>
        <tr>

          <th>Product Total</th>
          <th>Tax</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>100</td>
          <td>15</td>
          <td>2415</td>
        </tr>
       
       
      </tbody>
    </Table>      

    </Container>
    
  )
}

export default Cart