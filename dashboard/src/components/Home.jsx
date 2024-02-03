import React, { useState } from "react";
import {
   AppstoreOutlined,
   MailOutlined,
   SettingOutlined,
} from "@ant-design/icons";
import { Menu, Col, Row } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
   return {
      key,
      icon,
      children,
      label,
      type,
   };
}

const Home = () => {
   let navigate = useNavigate();
   const items = [
      getItem("Users", "sub1", <MailOutlined />, [
         getItem("Merchant", "/home/userlist"),
         getItem("Users", "2"),
      ]),
      getItem("Product", "sub2", <AppstoreOutlined />, [
         getItem("Category", "sub3", null, [
            getItem("Add Category", "3"),
            getItem("View Category", "/home/viewcategory"),
         ]),
         getItem("Sub Category", "sub4", null, [
            getItem("Add Sub Category", "5"),
            getItem("View Sub Category", "6"),
         ]),
         getItem("Product", "sub5", null, [
            getItem("Add Product", "7"),
            getItem("View Product", "8"),
         ]),
      ]),
      getItem("Discount", "sub6", <SettingOutlined />, [
         getItem("Add Discount", "9"),
         getItem("View Discount", "10"),
      ]),
   ];

   const rootSubmenuKeys = ["sub1", "sub2", "sub6"];

   const [openKeys, setOpenKeys] = useState(["sub1"]);
   const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
         setOpenKeys(keys);
      } else {
         setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
   };

   let handleClick = (event) => {
      console.log(event);
      navigate(event.key);
   };
   return (
      <>
         <Row>
            <Col span={5}>
               <Menu
                  mode="inline"
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}
                  onClick={handleClick}
                  style={{
                     width: 256,
                  }}
                  items={items}
               />
            </Col>
            <Col span={19}>
               <Outlet />
            </Col>
         </Row>
      </>
   );
};

export default Home;
