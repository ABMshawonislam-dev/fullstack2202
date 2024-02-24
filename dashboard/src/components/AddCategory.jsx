import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";

const AddCategory = () => {
  const data = useSelector((state) => state.activeUser.value);
  const onFinish = async (values) => {
    console.log("Success:", values, data.id);
    let response = await axios.post(
      "http://localhost:8000/api/v1/product/createcategory",
      {
        name: values.categoryname,
        ownerId: data.id,
      }
    );

    console.log(response);
  };
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
      <Form.Item
        label="Category Name"
        name="categoryname"
        rules={[
          {
            required: true,
            message: "Please input your category name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

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
  );
};

export default AddCategory;
