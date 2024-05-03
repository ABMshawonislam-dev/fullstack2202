async function getData(id) {
    console.log("id",id)
      const res = await fetch(
        `http://localhost:8000/api/v1/product/singelcategory?slug=${id}`
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      return res.json();
    }


const SingleCat = async ({params}) => {

    

 
     const data = await getData(params.slug);

    console.log("kisu akta",data)

  return (
    <div>
      {data.map((item) => (
        <h1> {item.name}</h1>
      ))}
    </div>
  );
}

export default SingleCat;