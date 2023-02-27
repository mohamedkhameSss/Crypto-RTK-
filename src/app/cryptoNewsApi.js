import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  "X-RapidAPI-Key": "ab9d67905dmshe6f943ab3a88fc3p1553c0jsnd422339e6294",
  "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
};
const baseUrl = "https://crypto-news16.p.rapidapi.com/";
const creatRequest = (url) => ({ url, headers: cryptoNewsHeader });
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ count }) => creatRequest(`/news/top/${count}`),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
