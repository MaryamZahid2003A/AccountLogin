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
        register : builder.mutation({
            query : (data)=>({
                url:`${base_URL}`,
                method:'POST',
                body:data,
            })
        }),
        logout : builder.mutation({
            query :()=>({
                url :`${base_URL}/logout`,
                method:'POST',
               
            })
        }),
         update : builder.mutation({
            query : (data)=>({
                url:`${base_URL}/profile`,
                method:'PUT',
                body:data,
            })
        })
    })
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation,useUpdateMutation}=UserApiSlice;