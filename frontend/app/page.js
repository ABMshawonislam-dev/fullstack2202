import Banner from '@/components/banner';
import Categorylist from '@/components/categorylist';
import Product from '@/components/product';
import Button from 'react-bootstrap/Button';

async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/product/allproducts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log(data)
  return (
    <>
    <Banner/>
    <Categorylist/>
    <Product item={data}/>
       
    </>
  );
}
