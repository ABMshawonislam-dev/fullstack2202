import React from 'react'

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allsubcategory')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const SubCategory = async () => {

    const data = await getData()

    console.log("onno kisu",data)

  return (
    <>
    <ul>
      {data.map(item=>(

       <li>{item.name}---- {item.categoryId?.name}</li>
      ))}
    </ul>
    </>
  )
}

export default SubCategory