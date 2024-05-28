import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderServices";

const initialState = {
  orders: [],
  placeOrderLoading: false,
  placeOrderError: false,
  placeOrderErrorMessage: '',
  placeOrderSuccess:false
  
}


export const placeOrder = createAsyncThunk('order/placeOrder', async (orderData,thunkAPI) => {
  try {
    const token = thunkAPI.getState().reducer.auth.user.token;
    console.log(token);
    console.log(orderData);
    return await orderService.placeOrder(orderData,token);
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
})




export const placeOrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder: (state) => {
      state.placeOrderLoading= false;
      state.placeOrderError= false;
      state.placeOrderErrorMessage = '';

    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(placeOrder.pending, (state) => {
      state.placeOrderLoading = true;
    })
    .addCase(placeOrder.fulfilled, (state) => {
      state.placeOrderLoading = false
      state.placeOrderSuccess = true
    })
    .addCase(placeOrder.rejected, (state,action) => {
      state.placeOrderLoading = false
      state.placeOrderError = true
      state.placeOrderErrorMessage = action.payload
    })
  }
})

export const { resetOrder } = placeOrderSlice.actions;
export default placeOrderSlice.reducer;
