import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "./productServices";

const initialState = {
  men: [],
  women: [],
  kids: [],
  latestMen: [],
  latestWomen: [],
  latestKids: [],
  menAreLoading: false,
  lastestMenAreLoading: false,
  womenAreLoading: false,
  latestWomenAreLoading: false,
  kidsAreLoading: false,
  latestKidsAreLoading:false,
  menError: false,
  lastestMenError: false,
  womenError: false,
  latestWomenError: false,
  kidsError: false,
  latestKidsError:false,
  menSuccess: false,
  latestMenSuccess: false,
  womenSuccess: false,
  latestWomenSuccess: false,
  kidsSuccess: false,
  latestKidsSuccess:false,
  menMessage:'',
  latestMenMessage:'',
  womenMessage:'',
  latestWomenMessage:'',
  kidsMessage:'',
  latestKidsMessage:'',
  
}

export const getLatestMenProducts = createAsyncThunk('get/getLatestMenProducts', async (_, thunkAPI) => {
  try {
    return await productServices.getLatestMenProducts();
  } catch (error) {
    const latestMenMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestMenMessage);
  }
})
export const getLatestWomenProducts = createAsyncThunk('get/getLatestWomenProducts', async (_, thunkAPI) => {
  try {
    return await productServices.getLatestWomenProducts();
  } catch (error) {
    const latestWomenMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestWomenMessage);
  }
})
export const getLatestKidsProducts = createAsyncThunk('get/getLatestKidsProducts', async (_, thunkAPI) => {
  try {
    return await productServices.getLatestKidsProducts();
  } catch (error) {
    const latestKidsMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestKidsMessage);
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.menAreLoading = false;
      state.lastestMenAreLoading = false;
      state.womenAreLoading = false;
      state.latestWomenAreLoading = false;
      state.kidsAreLoading = false;
      state.latestKidsAreLoading = false;
      state.menError = false;
      state.lastestMenError = false;
      state.womenError = false;
      state.latestWomenError= false;
      state.kidsError= false;
      state.latestKidsError= false;
      // state.menSuccess= false;
      // state.latestMenSuccess= false;
      // state.womenSuccess= false;
      // state.latestWomenSuccess= false;
      // state.kidsSuccess= false;
      // state.latestKidsSuccess= false;
      state.menMessage='';
      state.latestMenMessage='';
      state.womenMessage='';
      state.kidsMessage='';
      state.latestKidsMessage='';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLatestMenProducts.pending, (state) => {
        state.lastestMenAreLoading = true;
      })
      .addCase(getLatestMenProducts.fulfilled, (state,action) => {
        state.lastestMenAreLoading = false;
        state.latestMenSuccess = true;
        state.latestMen = action.payload;
      })
      .addCase(getLatestMenProducts.rejected, (state,action) => {
        state.lastestMenAreLoading = false;
        state.lastestMenError = true;
        state.latestMenMessage = action.payload;
      })
      .addCase(getLatestWomenProducts.pending, (state) => {
        state.lastestWomenAreLoading = true;
      })
      .addCase(getLatestWomenProducts.fulfilled, (state,action) => {
        state.lastestWomenAreLoading = false;
        state.latestWomenSuccess = true;
        state.latestWomen = action.payload;
      })
      .addCase(getLatestWomenProducts.rejected, (state,action) => {
        state.lastestWomenAreLoading = false;
        state.lastestWomenError = true;
        state.latestWomenMessage = action.payload;
      })
      .addCase(getLatestKidsProducts.pending, (state) => {
        state.lastestKidsAreLoading = true;
      })
      .addCase(getLatestKidsProducts.fulfilled, (state,action) => {
        state.lastestKidsAreLoading = false;
        state.latestKidsSuccess = true;
        state.latestKids = action.payload;
      })
      .addCase(getLatestKidsProducts.rejected, (state,action) => {
        state.lastestKidsAreLoading = false;
        state.lastestKidsError = true;
        state.latestKidsMessage = action.payload;
      })
  }

})

export const { resetProduct } = productSlice.actions;

export default productSlice.reducer;