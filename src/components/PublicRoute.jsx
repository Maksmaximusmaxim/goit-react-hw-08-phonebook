import React from "react";
import { Outlet , Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const PublicRoute =()=>{
    const token = useSelector(state => state.user.token)
    console.log(token , 'frgeg')
return token ? <Navigate to="/contacts" replace/> : <><Outlet/></>

}