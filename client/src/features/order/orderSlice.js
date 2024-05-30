import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderServices";

const initialState = {
  orders: [],

  getUserOrdersLoading: false,
  getUserOrdersError: false,
  getUserOrdersErrorMessage: '',
  getUserOrdersSuccess: false,
  
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
export const getUserOrders = createAsyncThunk('order/getUserOrders', async (_,thunkAPI) => {
  try {
    const token = thunkAPI.getState().reducer.auth.user.token;
    console.log(token);
    return await orderService.getUserOrders(token);
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

      state.getUserOrdersLoading = false;
      state.getUserOrdersError = false;
      state.getUserOrdersErrorMessage = '';
      

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
      
    .addCase(getUserOrders.pending, (state) => {
      state.getUserOrdersLoading = true;
    })
    .addCase(getUserOrders.fulfilled, (state,action) => {
      state.getUserOrdersLoading = false
      state.getUserOrdersSuccess = true
      state.orders = action.payload
    })
    .addCase(getUserOrders.rejected, (state,action) => {
      state.getUserOrdersLoading = false
      state.getUserOrdersError = true
      state.getUserOrdersErrorMessage = action.payload
    })
  }
})

export const { resetOrder } = placeOrderSlice.actions;
export default placeOrderSlice.reducer;
