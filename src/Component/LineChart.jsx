import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Col, Row, Typography } from "antd";
// const { Title } = Typography;
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName, timeperiod }) => {
  // const [coinHis, setcoinHis] = useState(coinHistory);
  // const [coinStamp, setcoinStamp] = useState([])
  // useEffect(()=>{
  //   setcoinStamp(coinHis.map(coin => coin.history[i]?.timestamp))

  // },[timeperiod])
  // useEffect(() => {
  //   setcoinHis(coinHistory);
  // }, [timeperiod]);

  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 10) {
    let covNum = coinHistory?.data?.history[i]?.timestamp;
    let input = new Date(covNum).toLocaleTimeString();
    // .split("/")[];
    // .toLocaleTimeString("en-US");

    // timeperiod === "5y" ? (input = input[2] -= 1) : (input = input);

    coinTimestamp.push(input);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
  }
  // console.log(coinTimestamp);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: ` ${coinName}`,
      },
    },
  };

  const labels =
    timeperiod === "3m"
      ? ["January", "February", "March", "April", "May", "June", "July"]
      : timeperiod === "1y"
      ? [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "september",
          "october",
          "november",
          "December",
        ]
      : timeperiod === "5y"
      ? ["2022", "2021", "2019", "2018", "2017"]
      : timeperiod === "3y"
      ? ["2022", "2021", "2019"]
      : coinTimestamp;

  const data = {
    coinTimestamp,
    coinPrice,
    coinName,
    labels,
    datasets: [
      {
        Filler: true,
        label: ` ${coinName}`,
        data: labels?.map(() => faker.datatype.number({ coinPrice })),
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: labels.map(() => faker.datatype.number({})),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return (
    <>
      <div className='container row chart-header'>
        <h2 className='chart-title text-white'>{coinName} Price Chart</h2>
        <div className='col price-container'>
          <h5 className='price-change text-white'>
            Change: {coinHistory?.data?.change}%
          </h5>
          <h5 className='current-price text-white'>
            Current {coinName} Price: $ {currentPrice}
          </h5>
        </div>
      </div>
      <div className='me-3'>
        <Line options={options} data={data} />
      </div>
    </>
  );
};
export default LineChart;
