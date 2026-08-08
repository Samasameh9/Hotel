import { createContext, useEffect, useState } from "react"

export let AuthContext=createContext()

export function  AuthContextProvider({children}){
const [userId, setuserId] = useState(null)


useEffect(()=>{
    if(localStorage.getItem("id")!=null){
        setuserId(localStorage.getItem("id"))

    }
},[])

    return <AuthContext.Provider value={{userId, setuserId}}>
{children}
    </AuthContext.Provider>
}