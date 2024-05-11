"use client"
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



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
 

   
        let price=0
        data.map(item=>{

            price += item.productId.salesprice ? (item.productId.salesprice*item.quantity) :(item.productId.regularprice*item.regularprice)
        })
        console.log(price)
  


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

    function createOrder() {
         fetch("http://localhost:8000/api/v1/product/createpayment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        id: "YOUR_PRODUCT_ID",
                        quantity: "YOUR_PRODUCT_QUANTITY",
                    },
                ],
            }),
        })
            .then(async (response) =>{
                let a = await response.json()
                console.log(a)
            })
            
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
          <th>Tax (15%)</th>
          <th>Delivery Charge</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{price}</td>
          <td>{(price*15)/100}</td>
          <td>50</td>
          <td>{price+((price*15)/100)+50}</td>
        </tr>
       
       
      </tbody>
    </Table>     
    <PayPalScriptProvider options={{ clientId:"ARc98bduEajyhDsaL9k7L07uK9lhpykQ1OKt1itQFIRmNqB751d4AN9S7FiJ8RTJzqHPS_6fcwcpWJ_6" }}>
            <PayPalButtons
                createOrder={createOrder}
            />
    </PayPalScriptProvider>

    </Container>
    
  )
}

export default Cart