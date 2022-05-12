// import { useContext } from "react"
// import { Usercontextone } from "./usercontextone"

// export const Usercontext =()=>{
//     const userContext =useContext(Usercontextone)
//     const handleLogin=()=>{
//         if(userContext){
//             userContext.setUser({
//                 name:'Clark',
//                 email:'Clark@gmail.com'
//             })
//         }
//     }
//     const handleLogout=()=>{
//         if(userContext){
//             userContext.setUser(null)
//         }
//     }
//     return(
//         <div>
//             <button onClick={handleLogin}>
//                 Login
//             </button>

//             <button onClick={handleLogout}>
//                 Logout
//             </button>

//             <h3>User name is {userContext ?.user?.name}</h3>
//             <h3>User email is {userContext?.user?.email}</h3>
//         </div>
//     )
// }


// or


import { useContext } from "react"
import { Usercontextone } from "./usercontextone"

export const Usercontext =()=>{
    const userContext =useContext(Usercontextone)
    const handleLogin=()=>{
            userContext.setUser({
                name:'Clark',
                email:'Clark@gmail.com'
            })
    }
    const handleLogout=()=>{
            userContext.setUser(null)
        }

    return(
        <div>
            <button onClick={handleLogin}>
                Login
            </button>

            <button onClick={handleLogout}>
                Logout
            </button>

            <h3>User name is {userContext.user?.name}</h3>
            <h3>User email is {userContext.user?.email}</h3>
        </div>
    )
}