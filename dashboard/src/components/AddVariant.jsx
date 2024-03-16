import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "axios";
const AddVariant = () => {
  let [value, setValue] = useState("");
  let [image, setImage] = useState({});
  let [imagePrev, setImagePrev] = useState("");
  let [prolist, setProlist] = useState([]);
  let [productId, setProductId] = useState("");

  const onFinish = async (values) => {
    console.log("Success:", values);
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/variant",
      {
        name: values.name,
        vavatar: image,
        productId: productId,
      }
    );
    console.log(data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log("running");
    async function getData() {
      let data = await axios.get(
        "http://localhost:8000/api/v1/product/allproducts"
      );
      console.log(data.data);
      let arr = [];
      data.data.map((item) => {
        arr.push({
          label: item.name,
          value: item._id,
        });
      });
      setProlist(arr);
    }
    getData();
  }, []);

  let handleChange = (e) => {
    setImage(e.target.files[0]);
    setImagePrev(URL.createObjectURL(e.target.files[0]));
  };
  let handleChange2 = (e) => {
    setProductId(e);
    console.log(e);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        enctype="multipart/form-data"
      >
        <Select
          defaultValue=""
          style={{
            width: 120,
          }}
          options={prolist}
          onChange={handleChange2}
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
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Input onChange={handleChange} type="file" />
        <img src={imagePrev} />
      </Form>
    </>
  );
};

export default AddVariant;
