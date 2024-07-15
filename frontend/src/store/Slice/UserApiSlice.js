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
        }),
        logout : builder.mutation({
            query :()=>({
                url :`${base_URL}/logout`,
                method:'POST',
            })
        })
    })
})

export const {useLoginMutation,useLogoutMutation}=UserApiSlice;