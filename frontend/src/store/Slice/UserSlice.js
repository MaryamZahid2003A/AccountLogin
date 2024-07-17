import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
};

const UserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            console.log('login from userslice')
        },
        logout: (state, action) => {
            console.log("Logging out and removing userInfo from local storage");
            state.userInfo = null;
            localStorage.removeItem('userInfo');
            // Check if local storage has been cleared
            console.log("Local Storage after logout:", localStorage.getItem('userInfo'));
        }
    }
});


export const { setCredentials, logout } = UserSlice.actions;
export { UserSlice };
