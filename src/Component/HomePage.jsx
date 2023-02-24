import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Col, Row, Spin, Statistic, Typography } from "antd";
import millify from "millify";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useGetcryptoQuery } from "../app/cryptoApi";

import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";

const HomePage = () => {
  const { data, isFetching } = useGetcryptoQuery({ count: 10 });
  // console.log(data);
  return (
    <div className='container'>
      {/* <h1 className=' text-center  m-5 '>CryptoCurrency</h1> */}
      <h3 className=' w-50 ms-3 my-5  '>Global Crypto Static</h3>
      {isFetching ? (
        <div className='vh-100 text-center m-5'>
          <Spin size='large' />
        </div>
      ) : (
        <>
          <div className='row whiteImpo container underline-x'>
            <div className='col-sm-6'>
              <Statistic
                title={<h6 className=' text-info'>Total CryptoCurrency</h6>}
                value={millify(data?.data?.stats?.totalCoins)}
                className='text-white'
              />
            </div>
            <div className='col-sm-6'>
              <Statistic
                title={<h6 className=' text-info'>Total Exchanges</h6>}
                value={millify(data?.data?.stats?.totalExchanges)}
              />
            </div>
            <div className='col-sm-6'>
              <Statistic
                title={<h6 className=' text-info'>Total Market Cap</h6>}
                value={millify(data?.data?.stats?.totalMarketCap)}
              />
            </div>
            <div className='col-sm-6'>
              <Statistic
                title={<h6 className=' text-info'>Totel 24h Volume</h6>}
                value={millify(data?.data?.stats?.total24hVolume)}
              />
            </div>
            <div className='col-sm-6'>
              <Statistic
                title={<h6 className=' text-info'>Totel Markets</h6>}
                value={millify(data?.data?.stats?.totalMarkets)}
              />
            </div>
          </div>
          <div className='home-heading-container my-3  '>
            <h4 className='home-title   ms-5 mt-5'>
              Top 10 Crypto Currencies in the world
            </h4>

            <Link className=' text-info me-5 mt-5' to={"./cryptoCurrencies"}>
              Show more
            </Link>
          </div>
          <CryptoCurrencies simplified />
          <div className='home-heading-container'>
            <h4 className='home-title ms-5 m-3'>
              Latest Crypto Currencies News
            </h4>

            <Link className='text-info  me-5' to={"./news"}>
              Show more
            </Link>
          </div>
          <News simplified />
        </>
      )}
    </div>
  );
};

export default HomePage;
