import React from 'react'

async function getData(slug) {
    const res = await fetch(`http:localhost:8000/api/v1/product/singlepro/${slug}`)
   

   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Singleproduct = async ({params}) => {
    const data = await getData(params.slug)
    console.log("asd",params.slug)
  return (
    
    data.map(item=>(
        <li>{item.name}</li>
    ))
  )
}

export default Singleproduct