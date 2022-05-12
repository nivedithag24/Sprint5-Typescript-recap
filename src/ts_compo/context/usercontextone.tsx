// import { useState,createContext } from "react"

// export type AuthUser ={
//     name:string
//     email:string
// }
// type UsercontextoneType={
//     user:AuthUser | null
//     setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
// }
// type UserContextProviderProps ={
//     children:React.ReactNode
// }
// export const Usercontextone=createContext<UsercontextoneType | null >(null)

// export const UserContextProvider =({children} : UserContextProviderProps) =>{
// const [user,setUser]=useState<AuthUser | null>(null)
// return <Usercontextone.Provider value={{user,setUser}}>
// {children}
// </Usercontextone.Provider>
// }

// step1 : we create a new context

// Typically a user context is for managing the authenticated state of the user in simpler words a user 
// should be able to login and logout of your application.


// or

import { useState,createContext } from "react"

export type AuthUser ={
    name:string
    email:string
}
type UsercontextoneType={
    user:AuthUser | null
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserContextProviderProps ={
    children:React.ReactNode
}
export const Usercontextone=createContext({} as UsercontextoneType)

export const UserContextProvider =({children} : UserContextProviderProps) =>{
const [user,setUser]=useState<AuthUser | null>(null)
return <Usercontextone.Provider value={{user,setUser}}>
{children}
</Usercontextone.Provider>
}
