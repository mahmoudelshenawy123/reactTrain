import {  createContext, useState } from "react";

const AuthContext = createContext(null)

function AuthProvider( {children}){
    const [user,setUser]=useState(null);

    const login =(users)=>{
        setUser(users);
    }
    const logout = ()=>{
        setUser(null);
    }

    return
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider;