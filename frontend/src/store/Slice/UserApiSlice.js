import {ApiSlice} from './ApiSlice';
const base_URL='/api/users'
export const UserApiSlice=ApiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login : builder.mutation({
            query : (data)=>({
                url:`${base_URL}/auth`,
                method:'POST',
                body:data,
            })
        })
    })
})

export const {useLoginMutation}=UserApiSlice;