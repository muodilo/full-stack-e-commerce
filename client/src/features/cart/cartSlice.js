import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartServices from "./cartServices";

const initialState = {
  cart: {},
  
  getCartLoading:false,
  getCartError:false,
  getCartSuccess:false,
  getCartMessage: '',
  
  addToCartError: false,
  addToCartSuccess: false,
  addToCartLoading: false,
  addToCartMessage: '',
}

//add to cart
export const addToCart = createAsyncThunk('cart/addToCart', async (id,thunkAPI) => {
  try {
    const token = thunkAPI.getState().reducer.auth.user.token;
    console.log(token);
    console.log(id);
    return await cartServices.addToCart(id,token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})
//get cart
export const getCart = createAsyncThunk('cart/getCart', async (_,thunkAPI) => {
  try {
    const token = thunkAPI.getState().reducer.auth.user.token;
    console.log(token);
    return await cartServices.getCart(token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})


export const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: (state) => {
      state.addToCartLoading = false;
      state.addToCartError = false;
      // state.addToCartSuccess = false;
      state.addToCartMessage = '';
      state.getCartLoading = false;
      state.getCartError = false;
      // state.addToCartSuccess = false;
      state.getCartMessage = '';
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(addToCart.pending, (state) => {
      state.addToCartLoading = true;
    })
    .addCase(addToCart.fulfilled, (state) => {
      state.addToCartLoading = false
      state.addToCartSuccess = true
    })
    .addCase(addToCart.rejected, (state,action) => {
      state.addToCartLoading = false
      state.addToCartError = true
      state.addToCartMessage = action.payload
    })
      
    .addCase(getCart.pending, (state) => {
      state.getCartLoading = true;
    })
    .addCase(getCart.fulfilled, (state,action) => {
      state.getCartLoading = false
      state.getCartSuccess = true
      state.cart = action.payload
    })
    .addCase(getCart.rejected, (state,action) => {
      state.getCartLoading = false
      state.getCartError = true
      state.cart ={}
      state.getCartMessage = action.payload
    })
      
  }
})

export const { resetCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;