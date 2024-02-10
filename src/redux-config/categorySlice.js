import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
    let response = await axios.get(`${import.meta.env.VITE_REACT_APP_MAINURL}/category/viewCategory`, {
        headers: {
            'authorization': import.meta.env.VITE_REACT_APP_SECURE_KEY
        }
    })
    if (response.data) {
        return response.data;
    }
})
const slice = createSlice({
    name: "category",
    initialState: {
        categoryList: [],
        categoryisLoading: false,
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.categoryisLoading = true;
        }).addCase(fetchCategory.fulfilled, (state, action) => {
            state.categoryList = action.payload;
            state.categoryisLoading = false
        }).addCase(fetchCategory.rejected, (state, action) => {
            state.categoryisLoading = false;
            state.error = "oops something went wrong "
        })

    }

});

export default slice.reducer;