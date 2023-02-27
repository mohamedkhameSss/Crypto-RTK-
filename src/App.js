import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";

import {
  HomePage,
  Exchanges,
  NotFound,
  CryptoCurrencies,
  MasterLayout,
  News,
  CryptoDetailes,
} from "./Component";

function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: "exchanges", element: <Exchanges /> },
        { path: "news", element: <News /> },
        { path: "cryptoCurrencies", element: <CryptoCurrencies /> },
        { path: "crypto/:coinId", element: <CryptoDetailes /> },
      ],
    },
  ]);
  return (
    <div className='app'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
