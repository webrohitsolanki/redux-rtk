import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk("getUsers", async (args, { rejectWithValue }) => {
    const response = await axios.get("https://645af57265bd868e932775a1.mockapi.io/users/users");

    try {
        const result = await response.data;
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const createUser = createAsyncThunk("createUser", async (payload, { rejectWithValue }) => {
    const response = await axios.post("https://645af57265bd868e932775a1.mockapi.io/users/users", payload)

    try {
        const result = response.data;
        console.log('create', result);
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const updateUser = createAsyncThunk("updateUser", async (payload, { rejectWithValue }) => {
    const response = await axios.put(`https://645af57265bd868e932775a1.mockapi.io/users/users/${payload.id}`, payload)

    try {
        const result = await response.data;
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await axios.delete(`https://645af57265bd868e932775a1.mockapi.io/users/users/${id}`)

    try {
        const result = await response.data;
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})


const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;
        },

        // create
        [createUser.pending]: (state) => {
            state.loading = true
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = [...state.users, action.payload];
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;
        },

        // update
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            console.log(action.payload);
            state.users = state.users.map((ele) => {
                return ele.id === action.payload.id ? action.payload : ele
            });
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false,
                action.error = action.payload
        },

        // delete
        [deleteUser.pending]: (state) => {
            state.loading = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            const id = action.payload.id;
            if (id) {
                state.users = state.users.filter((ele) => ele.id !== id)
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer;