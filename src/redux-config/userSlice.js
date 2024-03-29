import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const userLoginThunk = createAsyncThunk("userLoginThunk", async (data) => {
    let response = await axios.post(`${import.meta.env.VITE_REACT_APP_MAINURL}/customer/login-with-google`, data)
    if (response.data) {
        return response.data;
    }
})
const slice = createSlice(
    {
        name: 'user',
        initialState: {
            currentUser: null,
            loadingInUserLogin: false
        },
        reducers: {
            setUser: (state, action) => {
                state.currentUser = action.payload;
            },
            userSignOut: (state, action) => {
                state.currentUser = null;
            },
        },
        extraReducers: (builder) => {
            builder.addCase(userLoginThunk.pending, (state, action) => {
                state.loadingInUserLogin = true;
            }).addCase(userLoginThunk.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.loadingInUserLogin = false
            }).addCase(userLoginThunk.rejected, (state, action) => {
                state.loadingInUserLogin = false;
                state.error = "oops something went wrong "
            })

        }

    }
)

export const { setUser, userSignOut } = slice.actions;
export default slice.reducer;
