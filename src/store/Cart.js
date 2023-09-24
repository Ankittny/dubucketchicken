import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//constant
const CART = "CART";
//intialState
const initialState = {
  cart: null,
  status: null,
};
//fetch data from api
export const fetchCart = createAsyncThunk("CART/fetchCart", async () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (auth!=null) {
    const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}api/cart?token=${
        auth.access_token
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  }
  return false;
});


//create action and reducer
export const cart = createSlice({
  name: CART,
  initialState,

  // extraReducers: builder => {
  //   fetchCart.pending((state, action) => {
  //     alert("this is test")
  //     state.status = "loading";
  //   });
  //   fetchCart.fulfilled((state, {payload}) => {
  //     alert("payload");
  //     console.log(payload);
  //     // state.cart = payload;
  //     // state.status = "success";
  //   });
  //   fetchCart.rejected((state, action) => {
  //     alert("sdfsdfsdf");
  //     state.status = "failed";
  //   });


  // },
  extraReducers:  {
    [fetchCart.pending]: (state, action) => {
      alert("test");
      state.status = "loading";
    },
    [fetchCart.fulfilled]: (state, { payload }) => {
      console.log(payload);
      alert("this is second");
      state.cart = payload;
      state.status = "success";
    },
    [fetchCart.rejected]: (state, action) => {
       alert("this is third");
      state.status = "failed";
    },
  },

  
});

export default cart.reducer;
