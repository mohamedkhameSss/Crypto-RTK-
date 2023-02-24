import { Loading3QuartersOutlined } from "@ant-design/icons";
import React from "react";
import { Card, Col, Row, Spin } from "antd";

import { useGetCryptoNewsQuery } from "../app/cryptoNewsApi";
import { Link } from "react-router-dom";

const News = ({ simplified }) => {
  const count = simplified ? 8 : 50;

  const { data: news, isFetching } = useGetCryptoNewsQuery({ count });
  // console.log(news);
  // const { data } = useGetcryptoQuery({
  // newsCategory: "cryptocurrency",
  //   count: 10,
  // });
  // console.log(data);
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
      <div className='container my-3'>
        {!simplified && (
          <>
            <div className='width-100 text-center underline-x  m-5'>
              <h1>Crypto News</h1>
            </div>
          </>
        )}
        <div className='row g-3'>
          {news?.map((item, index) => (
            <div className='col-sm-6 col-lg-4 col-xl-3' key={index}>
              <Link
                target={"_blank"}
                className='text-decoration-none'
                to={`${item?.url}`}
                rel=' noreferrer'
              >
                <Card
                  style={{ minHeight: 250 }}
                  title={` ${
                    item?.title ? item?.title.slice(0, 20) : item?.date
                  }`}
                  // extra={
                  // }
                  hoverable
                >
                  {/* <h6>{item?.date?.split("2023")[0]}</h6> */}
                  <p>
                    {item?.description
                      ? item?.description?.slice(0, 150)
                      : item?.title}
                    ......
                  </p>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
