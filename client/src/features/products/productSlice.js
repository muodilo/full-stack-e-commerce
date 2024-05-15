import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      state.menSuccess= false;
      state.latestMenSuccess= false;
      state.womenSuccess= false;
      state.latestWomenSuccess= false;
      state.kidsSuccess= false;
      state.latestKidsSuccess= false;
      state.menMessage='';
      state.latestMenMessage='';
      state.womenMessage='';
      state.kidsMessage='';
      state.latestKidsMessage='';
    }
  }

})