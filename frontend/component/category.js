import React from 'react'

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allcategory')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const Category = async () => {

    const data = await getData()

  console.log("kisu akta",data)

  return (
    <>
    <ul>
      {data.map(item=>(

       <li>{item.name}---{item?.ownerId?.name}</li>
      ))}
    </ul>
    </>
  )
}

export default Category