import { Card, Spin } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetcryptoQuery } from "../app/cryptoApi";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 8 : 100;
  const { data, isFetching, isLoading } = useGetcryptoQuery({ count });
  const [cryptos, setCryptos] = useState([]);
  const [searchFactor, setSearchFactor] = useState("");
  useEffect(() => {
    const filtereData = data?.data?.coins?.filter((item) =>
      item?.name?.toLowerCase().includes(searchFactor.toLowerCase())
    );
    setCryptos(filtereData);
  }, [searchFactor, data]);
  if (isFetching || isLoading) {
    return (
      <div className='vh-100 text-center m-5'>
        <Spin size='large' />
      </div>
    );
  }
  return (
    <>
      {!simplified && (
        <>
          <div className='width-100 text-center m-4 '>
            <h1 className='underline-x'>Crypto Currencies</h1>
          </div>
          <div className='text-end m-3 '>
            <input
              placeholder='Search Crypto'
              className='rounded-pill p-2 text-center m-3'
              onChange={(e) => {
                setSearchFactor(e.target.value);
              }}
            />
          </div>
        </>
      )}
      {isFetching || isLoading ? (
        <div className='vh-100 text-center m-5'>
          <Spin />
        </div>
      ) : (
        <div className='container '>
          <div className='row g-3 mx-1 my-4'>
            {cryptos?.map((item) => (
              <div key={item.uuid} className='col-sm-6  col-lg-4 col-xl-3 '>
                <Link
                  className='text-decoration-none'
                  to={`/crypto/${item.uuid}`}
                >
                  <Card
                    title={`${item?.rank}.${item?.name} `}
                    extra={
                      <img
                        className='crypto-image'
                        src={item?.iconUrl}
                        alt={item?.name}
                      />
                    }
                    hoverable
                  >
                    <p>Price : {millify(item?.price)}</p>
                    <p>Market : {millify(item?.marketCap)}</p>
                    <p>Daily change : {millify(item?.change)} %</p>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoCurrencies;
