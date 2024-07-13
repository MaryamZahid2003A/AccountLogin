import {configureStore} from '@reduxjs/toolkit'
import { UserSlice } from './Slice/UserSlice';
import { ApiSlice } from './Slice/ApiSlice';
const Store=configureStore({
    reducer:{
        auth1:UserSlice.reducer,
        [ApiSlice.reducerPath]: ApiSlice.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools:true,
})

export default Store;