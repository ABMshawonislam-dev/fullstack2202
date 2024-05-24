import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Affiliate = () => {
    let [allpro,setAllpro]= useState([])


    let uuser = useSelector((state=>state.activeUser.value))

    useEffect(()=>{
        async function allpro(){
            let data = await axios.get("http://localhost:8000/api/v1/product/allproducts")
            setAllpro(data.data)
        }
        allpro()
    },[])
  return (
    allpro.map(item=>(

        <div>{item.name} -- {`http://localhost:3000/product/${item.name}?userid=${uuser.id}`}</div>
    ))
  )
}

export default Affiliate