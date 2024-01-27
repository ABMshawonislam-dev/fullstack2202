import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from "antd";

const UserList = () => {
   let [userlist, setUserList] = useState([]);
   let [username, setusername] = useState([]);


    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        filters: username,
        filterMode: "tree",
        filterSearch: true,
        onFilter: (value, record) => record.name.startsWith(value),
        width: "30%",
      },
      {
        title: "Email",
        filters: [
          {
            text: "Joe",
            value: "Joe",
          },
          {
            text: "Category 1",
            value: "Category 1",
          },
          {
            text: "Category 2",
            value: "Category 2",
          },
        ],
        filterMode: "tree",
        filterSearch: true,
        dataIndex: "email",
      },
      {
        title: "Role",
        dataIndex: "role",
        filters: [
          {
            text: "London",
            value: "London",
          },
          {
            text: "New York",
            value: "New York",
          },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        width: "40%",
      },
    ];
    

     
     useEffect(() => {
        let username = []
       async function user() {
         let userData = await axios.get(
           "http://localhost:8000/api/v1/auth/alluser"
         );
         setUserList(userData.data);
         userData.data.map(item=>{
            username.push({
              text: item.name,
              value: item.name,
            });
         })

         setusername(username);

         
       }
       user();
     }, []);

    const onChange = (pagination, filters, sorter, extra) => {
      console.log("params", pagination, filters, sorter, extra);
    };



  return (
    // <div>UserList</div>
    // <>
    //   {userlist.map((item) => (
    //     <h1>{item.name}</h1>
    //   ))}
    // </>
    <Table columns={columns} dataSource={userlist} onChange={onChange} />
  );
}

export default UserList