import axios from "axios";
import React, { useEffect } from "react";

const ViewCategory = () => {
   useEffect(() => {
      async function viewcategory() {
         let data = await axios.get(
            "http://localhost:8000/api/v1/product/allcategory"
         );
         console.log(data);
      }
      viewcategory();
   }, []);
   return <div>ViewCategory</div>;
};

export default ViewCategory;
