import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery, useGetHistoryCryptoQuery } from "../app/cryptoApi";
import millify from "millify";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import HTMLReactParser from "html-react-parser";
import LineChart from "./LineChart";
import { Spin } from "antd";

const CryptoDetailes = () => {
  const { coinId } = useParams();
  // console.log(coinId);
  const { data, isFetching } = useGetDetailsQuery({ coinId });
  const [timeperiod, setTimeperiod] = useState("5y");
  const { data: coinHistory } = useGetHistoryCryptoQuery({
    coinId,
    timeperiod,
  });
  // console.log(coinHistory);
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);
  const [coin, setCoin] = useState(data?.data?.coin);
  // useEffect(() => {
  //   console.log(timeperiod);
  // }, [timeperiod]);

  const time = ["1h", "3h", "12h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  if (isFetching) return <Loading3QuartersOutlined />;
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
      id: 13,
    },
    {
      title: "Rank",
      value: cryptoDetails?.rank,
      icon: <NumberOutlined />,
      id: 14,
    },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails["24" + "hVolume"] &&
        millify(cryptoDetails["24" + "hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
      id: 15,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
      id: 16,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
      id: 17,
    },
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
      id: 18,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
      id: 19,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
      id: 22,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
      id: 23,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
      id: 25,
    },
  ];
  if (isFetching) {
    return (
      <div className='vh-100 text-center m-5'>
        {/* <Loading3QuartersOutlined /> */}
        <Spin size='large' />
      </div>
    );
  }
  return (
    <>
      <div className='container m-3 me-5 pe-5'>
        <div className='coin-heading-container'>
          <h2 className='coin-name'>
            {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
          </h2>
          <p>
            {cryptoDetails?.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </div>

        <select
          defaultValue='5y'
          className='select-timeperiod rounded'
          placeholder='Select Timeperiod'
          onChange={(value) => setTimeperiod(value.target.value)}
        >
          {time.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select>
        <LineChart
          timeperiod={timeperiod}
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails?.price)}
          coinName={cryptoDetails?.name}
        />
        <div className='mt-5 row g-2 align-items-center'>
          <div className='col-12 col-md-6'>
            <div className=''>
              <h3 className=''>{cryptoDetails?.name} Value Statistics</h3>
              <p>
                An overview showing the statistics of {cryptoDetails?.name},
                such as the base and quote currency, the rank, and trading
                volume.
              </p>
            </div>
            {stats?.map(({ icon, title, value, id }) => (
              <div className='coin-stats ' key={id}>
                <div className='d-flex align-items-center'>
                  <span className='pe-2 '>{icon}</span>
                  <span className='mt-1'>{title}</span>
                </div>
                <span className='stats'>{value}</span>
              </div>
            ))}
          </div>
          <div className=' col-md-6'>
            <div className=''>
              <h3 className=''>Other Stats Info</h3>
              <p>
                An overview showing the statistics of {cryptoDetails?.name},
                such as the base and quote currency, the rank, and trading
                volume.
              </p>
            </div>
            {genericStats?.map(({ icon, title, value, id }) => (
              <div className='coin-stats' key={`${id}${value}`}>
                <div className='d-flex align-items-center'>
                  <span className='pe-2 '>{icon}</span>
                  <span className='mt-1'>{title}</span>
                </div>
                <span className='stats'>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='coin-desc-link'>
          <div className='row coin-desc'>
            <h3 className='coin-details-heading'>
              What is {cryptoDetails?.name}
            </h3>
            {HTMLReactParser(cryptoDetails?.description)}
          </div>
          <div className='coin-links'>
            <h3 className='coin-details-heading'>
              {cryptoDetails?.name} Links
            </h3>
            {cryptoDetails?.links?.map((link, i) => (
              <div className='coin-link' key={i}>
                <h5 className='link-name'>{link?.type}</h5>
                <a
                  href={link?.url}
                  target='_blank'
                  className='text-info'
                  rel='noreferrer'
                >
                  {link?.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoDetailes;
