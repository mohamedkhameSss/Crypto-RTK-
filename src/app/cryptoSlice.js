// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getCrypto = createAsyncThunk(
//   "crypto/getCrypto",
//   async (_, thunkApi) => {
//     try {
//       const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "ab9d67905dmshe6f943ab3a88fc3p1553c0jsnd422339e6294",
//           "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//         },
//       };

//       const res = await fetch(
//         "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
//         options
//       );
//       const data = res.json();
//       return data;
//     } catch (error) {
//       console.log("thi", error);
//     }
//   }
// );
// const cryptoSlice = createSlice({
//   name: "crypto",
//   initialState: { crypto: [], isLoading: false },

//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload)
//     })
//   },
// })

// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))

// P
//   extraReducers: {
//     [getCrypto.fulfilled]: (state, action) => {
//       state.isLoading = false;
//       state.crypto = action.payload;
//     },
//     [getCrypto.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [getCrypto.rejected]: (state, action) => {
//       state.isLoading = false;

//       console.log(action);
//     },
//   },
// });

// export default cryptoSlice.reducer;
