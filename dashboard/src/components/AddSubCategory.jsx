import React ,{useState,useEffect}from 'react'
import { Button, Checkbox, Form, Input,Select, Space } from 'antd';
import axios from 'axios';

const AddSubCategory = () => {
    let [data,setData] = useState([])
    let [id,setId] = useState("")
    
    const onFinish =async (values) => {
        console.log('Success:', values,id);
        let response = await axios.post("http://localhost:8000/api/v1/product/subcategory",{
            name: values.subcategoryname,
            categoryId:id

        })

        console.log(response)

      };

      const handleChange = (value) => {
        console.log(`selected ${value}`);
        setId(value)
      };

      useEffect(() => {
        let arr = []
        async function viewcategory() {
           let data = await axios.get(
              "http://localhost:8000/api/v1/product/allcategory"
           );
  
           data.data.map(item=>{
            // if(item.isActive){
            //     arr.push(
            //         {
            //           value: item._id,
            //           label: item.name,
                      
            //         },
            //      )
            // }
              arr.push(
                 {
                   value: item._id,
                   label: item.name,
                 }
              )
           })
          
           setData(arr);
           console.log("arr",arr)
        }
        viewcategory();
     }, []);





  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    
    autoComplete="off"
  >
  
    <h1>Sub Category Name {id}</h1>
    <Form.Item
      label=""
      name="subcategoryname"
      rules={[
        {
          required: true,
          message: 'Please input your category name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Select
      defaultValue="Select Category"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={data}
    />

    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddSubCategory