import { Space, Typography } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from ".";

const MasterLayout = () => {
  return (
    <>
      <div className='navbar1'>
        <Navbar />
      </div>
      <div className='main'>
        <Outlet></Outlet>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto <br />
            all Rights Reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
            <Link to='/cryptoCurrencies'>CryptoCurrencies</Link>
            <Link to='/exchanges'>Exchanges</Link>
          </Space>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
