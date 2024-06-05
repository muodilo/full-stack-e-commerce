import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productServices from "./productServices";

const initialState = {
  specificProduct: {},
  men: [],
  women: [],
  kids: [],
  latestMen: [],
  latestWomen: [],
  latestKids: [],
  featured: [],

  featuredLoading:false,
  featuredError:false,
  featuredSuccess:false,
  featuredMessage: '',
  
  specificProductLoading:false,
  specificProductError:false,
  specificProductSuccess:false,
  specificProductMessage: '',
  

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
export const getLatestFeaturedProducts = createAsyncThunk('get/getLatestFeaturedProducts', async (_, thunkAPI) => {
  try {
    return await productServices.getLatestFeaturedProducts();
  } catch (error) {
    const latestKidsMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestKidsMessage);
  }
})

export const getSpecificProduct = createAsyncThunk('get/getSpecificProduct', async (id, thunkAPI) => {
  try {
    return await productServices.getSpecificProduct(id);
  } catch (error) {
    const latestKidsMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestKidsMessage);
  }
})

export const getAllMenProducts = createAsyncThunk('get/getAllMenProducts', async (_, thunkAPI) => {
  try {
    return await productServices.getAllMenProducts();
  } catch (error) {
    const latestMenMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestMenMessage);
  }
})

export const getAllWomenProducts = createAsyncThunk('get/getAllWomenProducts', async (_, thunkAPI) => {
  try {
    return await productServices.getAllWomenProducts();
  } catch (error) {
    const latestMenMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestMenMessage);
  }
})

export const getAllKidsProducts = createAsyncThunk('get/getAllKidsProducts', async (_, thunkAPI) => {
  try {
    return await productServices.getAllKidsProducts();
  } catch (error) {
    const latestMenMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(latestMenMessage);
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
      state.latestKidsMessage = '';
      
      state.featuredLoading=false;
      state.featuredError=false;
      // state.featuredSuccess=false;
      state.featuredMessage = '';
      
      state.specificProductLoading=false;
      state.specificProductError=false;
      // state.featuredSuccess=false;
      state.specificProductMessage='';
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

      .addCase(getLatestFeaturedProducts.pending, (state) => {
        state.featuredLoading = true;
      })
      .addCase(getLatestFeaturedProducts.fulfilled, (state,action) => {
        state.featuredLoading = false;
        state.featuredSuccess = true;
        state.featured = action.payload;
      })
      .addCase(getLatestFeaturedProducts.rejected, (state,action) => {
        state.featuredLoading = false;
        state.featuredError = true;
        state.featuredMessage = action.payload;
      })


      .addCase(getSpecificProduct.pending, (state) => {
        state.specificProductLoading = true;
      })
      .addCase(getSpecificProduct.fulfilled, (state,action) => {
        state.specificProductLoading = false;
        state.specificProductSuccess = true;
        state.specificProduct = action.payload;
      })
      .addCase(getSpecificProduct.rejected, (state,action) => {
        state.specificProductLoading = false;
        state.specificProductError = true;
        state.specificProductMessage = action.payload;
      })


      .addCase(getAllMenProducts.pending, (state) => {
        state.menAreLoading = true;
      })
      .addCase(getAllMenProducts.fulfilled, (state,action) => {
        state.menAreLoading = false;
        state.menSuccess = true;
        state.men = action.payload;
      })
      .addCase(getAllMenProducts.rejected, (state,action) => {
        state.menAreLoading = false;
        state.menError = true;
        state.menMessage = action.payload;
      })


      .addCase(getAllWomenProducts.pending, (state) => {
        state.womenAreLoading = true;
      })
      .addCase(getAllWomenProducts.fulfilled, (state,action) => {
        state.womenAreLoading = false;
        state.womenSuccess = true;
        state.women = action.payload;
      })
      .addCase(getAllWomenProducts.rejected, (state,action) => {
        state.womenAreLoading = false;
        state.womenError = true;
        state.womenMessage = action.payload;
      })

      .addCase(getAllKidsProducts.pending, (state) => {
        state.kidsAreLoading = true;
      })
      .addCase(getAllKidsProducts.fulfilled, (state,action) => {
        state.kidsAreLoading = false;
        state.kidsSuccess = true;
        state.kids = action.payload;
      })
      .addCase(getAllKidsProducts.rejected, (state,action) => {
        state.kidsAreLoading = false;
        state.kidsError = true;
        state.kidsMessage = action.payload;
      })
  }

})

export const { resetProduct } = productSlice.actions;

export default productSlice.reducer;