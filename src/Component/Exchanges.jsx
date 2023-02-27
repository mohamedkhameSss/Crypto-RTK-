import { Collapse, Spin } from "antd";
import millify from "millify";
import { useGetExchangesQuery } from "../app/cryptoApi";
const { Panel } = Collapse;

const App = () => {
  const { data, isFetching, isLoading } = useGetExchangesQuery();
  const exchanges = data?.data?.exchanges;
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
          <Spin size='large' />
        </div>
      ) : (
        <>
          <div className='row justify-content-between text-white m-2 no-wrap me-2'>
            <div className='col-6 exFont'>Currency</div>

            <div className='col-2 exFont'>24hVolume</div>
            <div className='col-2 exFont'>Markets</div>
            <div className='col-2 exFont'>marketShare</div>
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
                        {millify(exchange?.["24hVolume"])}
                      </div>
                      <div className='col'>
                        {millify(exchange?.numberOfMarkets)}
                      </div>
                      <div className='col'>{exchange?.marketShare}</div>
                    </div>
                  </>
                }
              >
                <p>
                  <span className='text-info'> {exchange?.name}</span>
                  is a blockchain ecosystem comprising a cryptocurrency
                  exchange, startup incubator, startup investor, and coin
                  information provider.{" "}
                  <span className='text-info'> {exchange?.name}</span> is a
                  highly popular exchange and allows its users to trade hundreds
                  of
                  <span className='text-info'> {exchange?.name}</span> exchange
                  requires KYC (know-your-customer), which is the process that
                  banks gather identifying data and contact information from
                  current and potential customers, to prevent fraud.{" "}
                  <span className='text-info'> {exchange?.name}</span> is
                  capable of processing millions orders per second and supports
                  many cryptocurrencies.
                </p>
              </Panel>
            </Collapse>
          ))}
        </>
      )}
    </>
  );
};
export default App;
