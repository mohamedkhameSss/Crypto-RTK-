import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Collapse, Spin } from "antd";
import millify from "millify";
import { useGetExchangesQuery } from "../app/cryptoApi";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const App = () => {
  const { data, isFetching, isLoading } = useGetExchangesQuery();

  // const {}
  const exchanges = data?.data?.exchanges;
  console.log(exchanges);
  // console.log(stats);
  const descArray = [];
  const dayChhange = "24hVolume";
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className='width-100 text-center underline-x  m-5'>
        <h1>Exchanges</h1>
      </div>
      {isFetching || isLoading ? (
        <div className='vh-100 text-center m-5'>
          {/* <Loading3QuartersOutlined /> */}
          <Spin size='large' />
        </div>
      ) : (
        <>
          <div className='row justify-content-between text-white mb-2 me-2'>
            <div className=' w-50'>
              <span className='ms-5'>Currency</span>
              {/* <span></span> */}
            </div>

            <div className='col'>24hVolume</div>
            <div className='col'>numberOfMarkets</div>
            <div className='col'>marketShare</div>
          </div>
          {exchanges?.map((exchange) => (
            <Collapse
              key={exchange.uuid}
              defaultActiveKey={["1"]}
              onChange={onChange}
            >
              <Panel
                header={
                  <>
                    <div className='row justify-content-between '>
                      <div className='d-flex w-50'>
                        <span>
                          <img
                            className='exchange-image'
                            src={exchange?.iconUrl}
                            alt=''
                          />
                        </span>
                        <span>{exchange?.name}</span>
                      </div>

                      <div className='col '>
                        {millify(exchange?.["24" + "hVolume"])}
                      </div>
                      <div className='col'>
                        {millify(exchange?.numberOfMarkets)}
                      </div>
                      <div className='col'>{exchange?.marketShare}</div>
                    </div>
                  </>
                }
                // key={}
              >
                {/* <a href={exchange?.coinrankingUrl}>{exchange?.name}</a> */}
                <p className='text-primary'>
                  {exchange?.name}
                  is a blockchain ecosystem comprising a cryptocurrency
                  exchange, startup incubator, startup investor, and coin
                  information provider. {exchange?.name} is a highly popular
                  exchange and allows its users to trade hundreds of
                  {exchange?.name} exchange requires KYC (know-your-customer),
                  which is the process that banks gather identifying data and
                  contact information from current and potential customers, to
                  prevent fraud. {exchange?.name} is capable of processing
                  millions orders per second and supports many cryptocurrencies.
                </p>
              </Panel>
              {/* <Panel header='This is panel header 2' key='2'>
              <p>{text}</p>
            </Panel>
            <Panel header='This is panel header 3' key='3'>
              <p>{text}</p> */}
              {/* </Panel> */}
            </Collapse>
          ))}
        </>
      )}
    </>
  );
};
export default App;
