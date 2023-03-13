import  Cookie from "cookie.js";
import { baseService } from "./baseService"
import { store } from "../store/store";


export const setToken = () => {
baseService.defaults.headers.common.Authorization = "Bearer" + Cookie.get("token")
}

export const logout = () : void => {
    Cookie.remove('token');
    store.dispatch(logout)
}

baseService.interceptors.response.use((res)=>{return res;}, (error)=>{
    if(error.response.status === 401){
        logout()
    }
    return error
})