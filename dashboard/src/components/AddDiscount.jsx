import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input,Select } from 'antd';
import axios from 'axios';


const AddDiscount = () => {
    let [prolist,setProList] = useState([])
    let [discounttype,setDiscountType] = useState("")
    const onFinish =async (values) => {
        console.log('Success:', values,discounttype);
        let data = await axios.post("http://localhost:8000/api/v1/product/creatediscount",{
            name: values.name,
            amount: values.amount,
            type:discounttype
        })

        console.log(data)
           
           
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


      useEffect(()=>{
        async function allpro(){
            let data = await axios.get("http://localhost:8000/api/v1/product/allproducts")
            let arr = []
            console.log(data)
            data.data.map(item=>{
                arr.push({
                    label: item.name,
                    value: item._id
                })
            })
            console.log(arr)
            setProList(arr)
        }

        allpro()
      },[])

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
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="amout"
      name="amout"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Select
      defaultValue="Fixed"
      style={{
        width: 120,
      }}
      onChange={(e)=>setDiscountType(e)}
      options={[
        {
          value: 'fixed',
          label: 'fixed',
        },
        {
          value: 'percent',
          label: 'percent',
        },
        {
          value: 'delivery',
          label: 'delivery',
        },
        {
          value: 'flat',
          label: 'flat',
        },
      ]}
    />

{/* <Select
      defaultValue="Select Pro"
      style={{
        width: 120,
      }}
    //   onChange={handleChange}
      options={prolist}
    /> */}

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

export default AddDiscount