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
  lastestMenSuccess: false,
  womenSuccess: false,
  latestWomenSuccess: false,
  kidsSuccess: false,
  latestKidsSuccess:false,
  menMessage:'',
  lastestMenMessage:'',
  womenMessage:'',
  latestWomenMessage:'',
  kidsMessage:'',
  latestKidsMessage:'',
  
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProduct:(state)
  }

})