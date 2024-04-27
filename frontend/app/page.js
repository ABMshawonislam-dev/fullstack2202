import Category from "@/component/category";
import Product from "@/component/product";
import SubCategory from "@/component/subCategory";
import Image from "next/image";



export default async function Home() {


 

  
  return (
    <>
      <h1>Category</h1>
      <Category/>
      <h1>SubCategory</h1>
      <SubCategory/>
      <h1>Product</h1>
      <Product/>
    </>
  );
}
