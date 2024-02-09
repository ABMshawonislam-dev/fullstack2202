import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form,Input,Button, Space, Table, Modal } from 'antd';

const ViewCategory = () => {
   let [data,setData] = useState([])
   let [loadData,setLoadData] = useState(false)
   let [loading,setLoading] = useState("")
   let [msg ,setMsg] = useState("")
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [editid, setEditId] = useState(false);
   const showModal = (id) => {
      console.log("editid",id)
      setEditId(id)
     setIsModalOpen(true);
   };
   const handleOk = () => {
     setIsModalOpen(false);
   };
   const handleCancel = () => {
     setIsModalOpen(false);
   };

   let handleDelete = async (id)=>{
    setLoading(id)
      let data = await axios.post("http://localhost:8000/api/v1/product/deletecategory",{
         id:id
      })

      console.log(data.data.success)
      setMsg(data.data.success)
      setLoadData(!loadData)
      setLoading("")
   }

   const onFinishModal =async (values) => {
      console.log('Success Modal:', values,editid);
      let response = await axios.post("http://localhost:8000/api/v1/product/editcategory",{
          name: values.categoryname,
          id:editid

      })

      console.log(response)
      setLoadData(!loadData)
      setIsModalOpen(false)
      



    };

   const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      
      },
      {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
      },
     
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <Button type="primary" onClick={()=>showModal(record.key)}>Edit </Button>
            <Button onClick={()=>handleDelete(record.key)} loading={loading == record.key?true:false}>Delete</Button>
          </Space>
        ),
      },
    ];
   //  const data = [
   //    {
   //      key: '1',
   //      name: 'John Brown',
   //      active: 'New York No. 1 Lake Park',
        
   //    },
     
   //  ];


   useEffect(() => {
      let arr = []
      async function viewcategory() {
         let data = await axios.get(
            "http://localhost:8000/api/v1/product/allcategory"
         );

         data.data.map(item=>{
            arr.push(
               {
                 key: item._id,
                 name: item.name,
                 active: item.isActive ? "Approved":"Pending",
                 
               },
            )
         })
        
         setData(arr);
      }
      viewcategory();
   }, [loadData]);
   return  (
      <>
         <h1>Categories {data.length}</h1>
         <p>{msg}</p>
         <Table columns={columns} dataSource={data}/>
         <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
               onFinish={onFinishModal}
               
               autoComplete="off"
            >
               <Form.Item
                  label="Category Name"
                  name="categoryname"
                  rules={[
                  {
                     required: true,
                     message: 'Please input your category name!',
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
         </Modal>
      </>
   );
};

export default ViewCategory;
