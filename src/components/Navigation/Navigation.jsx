import { NavLink , Outlet } from "react-router-dom";
export const Navigation = () =>{
    return (
        <>  
           <nav>
            <NavLink to="/login" >Вход</NavLink>
            <NavLink to="/register" >Регестрация</NavLink>
            <NavLink to="/contacts" >Ваши контакты</NavLink>
            <div>
                <img src="" alt="" />
                <p>человек</p>
                <button type="button">выйти</button>
            </div>
        </nav>
        <Outlet/>
        </>
   
    )
}