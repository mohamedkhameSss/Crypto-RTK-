import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Crypto",
    "1",
    <Link className='text-decoration-none' to='/'>
      {<HomeOutlined />}
    </Link>
  ),
  getItem(
    "Exchanges",
    "2",
    <Link className='text-decoration-none' to='/exchanges'>
      {<MoneyCollectOutlined />}
    </Link>
  ),
  getItem(
    "News",
    "3",
    <Link className='text-decoration-none' to='/news'>
      {<BulbOutlined />}
    </Link>
  ),
  getItem(
    "CryptoCurrencies",
    "4",
    <Link className='text-decoration-none' to='/cryptoCurrencies'>
      {<FundOutlined />}
    </Link>
  ),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className='mt-5 px-2' style={{ width: 256 }}>
      <Button
        type='primary'
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        Crypto
      </Button>
      <Menu
        style={{ zIndex: 99999999 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsed}
        items={items}
      />
      <h3>{Link.name}</h3>
    </div>
  );
};
export default App;
