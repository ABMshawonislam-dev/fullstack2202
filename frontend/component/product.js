import Image from 'next/image'


async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allproducts')

   
    if (!res.ok) {

      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const Product = async () => {
    // allproducts
    const data = await getData()
    console.log("product akta",data)
  return (
    <>
      <ul>
        {data.map((item) => (
          <>
            <li>{item.name}</li>
            <li  dangerouslySetInnerHTML={{ __html: item.description }}></li>
            <li>
              <Image
                src={`http://localhost:8000${item.image}`}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </li>
            <li>
              {" "}
              {item.salesprice ? (
                <div>
                  <del>{item.regularprice}</del>--
                  {item.salesprice}
                </div>
              ) : (
                <p>{item.regularprice}</p>
              )}{" "}
            </li>
            <li>
              {item.variantsId.map(vitem=>(
                <>
                  <span>{vitem.name}</span>
                <Image
                src={`http://localhost:8000${vitem.image}`}
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <span>{vitem.salesprice ? (
                <div>
                  <del>{vitem.regularprice}</del>--
                  {vitem.salesprice}
                </div>
              ) : (
                <p>{vitem.regularprice}</p>
              )}</span>
                </>
              ))}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default Product