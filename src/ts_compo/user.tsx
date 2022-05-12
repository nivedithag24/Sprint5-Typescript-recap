// import {useState} from 'react'

// type AuthUser ={
//     name:string 
//     email:string
// }

// export const User =()=>{
//     const [user,setUser]=useState<AuthUser | null>(null) //here we are informing ts that user can either be null or authuser.
//     const handleLogin=()=>{
//         setUser({
//             name:'Stark',
//             email:'Stark@email.com'
//         })
//     }
//     const handleLogout=()=>{
//         setUser(null)
//     }
//     return(
//         <div>
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleLogout}>Logout</button>
//             <h3>User name is {user?.name}</h3> 
//             <h3>User email is {user?.email}</h3>
            
//         </div>
//     )
// }

//this question mark(in line 23,24) is nothing but optional type or optional chaining operator...this is 
// coming because user can be null so oly if user exists the access the name property that is some ts magic also 
// if you try to get rid of this optional chaining ts is going to complain again object is possibly null so you always have to check if 
// the object exists before accessing its property and same is the case with email.



// type assertion : It is something you could potentially come accross in a code base 

import {useState} from 'react'

type AuthUser ={
    name:string 
    email:string
}

export const User =()=>{
    const [user,setUser]=useState<AuthUser>({} as AuthUser) //here we are informing ts that user can either be null or authuser.
    const handleLogin=()=>{
        setUser({
            name:'Stark',
            email:'Stark@email.com'
        })
    }
  
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <h3>User name is {user?.name}</h3> 
            <h3>User email is {user?.email}</h3>
            
        </div>
    )
}