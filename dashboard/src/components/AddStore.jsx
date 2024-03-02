import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

const AddStore = () => {
  let userInfo = useSelector((state) => state.activeUser.value);

  const onFinish = async (values) => {
    console.log("Success:", values);
    let data = await axios.post(
      "http://localhost:8000/api/v1/product/createstore",
      {
        storename: values.storename,
        tradenumber: values.tradenumber,
        voterid: values.voterid,
        ownerId: userInfo.id,
      }
    );

    console.log(data.data.success);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Store Name"
        name="storename"
        rules={[
          {
            required: true,
            message: "Please input your store name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Trade Number"
        name="tradenumber"
        rules={[
          {
            required: true,
            message: "Please input your trade number!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Voter ID"
        name="voterid"
        rules={[
          {
            required: true,
            message: "Please input your voter id!",
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

export default AddStore;
