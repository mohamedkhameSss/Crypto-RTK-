import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeader = {
  //   "X-BingApis-SDK": "true",
  //   "X-RapidAPI-Key": "ab9d67905dmshe6f943ab3a88fc3p1553c0jsnd422339e6294",
  //   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "ab9d67905dmshe6f943ab3a88fc3p1553c0jsnd422339e6294",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "x-access-token":
    "coinranking892768579b8fabf3c6b1d261b1870add07649eb240018a9e",
};

const baseUrl = "https://coinranking.com/api/v2/";
//  "https://bing-news-search1.p.rapidapi.com/";
const creatRequest = (url) => ({ url, headers: cryptoHeader });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getcrypto: builder.query({
      query: ({ count }) => creatRequest(`/coins?limit=${count}`),
    }),
    getDetails: builder.query({
      query: ({ coinId }) => creatRequest(`/coin/${coinId}`),
    }),
    getExchanges: builder.query({
      query: () => creatRequest(`/exchanges`),
    }),
    getHistoryCrypto: builder.query({
      query: ({ coinId, timePeriod }) =>
        creatRequest(
          `/coin/${coinId}/history?timeperiod=${timePeriod}&referenceCurrencyUuid=yhjMzLPhuIDl`
        ),
    }),
  }),
});
export const {
  useGetcryptoQuery,
  useGetDetailsQuery,
  useGetHistoryCryptoQuery,
  useGetExchangesQuery,
} = cryptoApi;
