// type ButtonProps={
//     handleClick: ()=>void
//     // Half of the time a click handler does not need any parameter and does not need anything for ex it can make
//     // an api call in the function body but doesnot have to accept a parameter or return a value for such 
//     // cases you can type the event as empty paranthesis are a function and does not return anything so void
//     // 
// }

import React from "react"

// export const Button = (props:ButtonProps)=>{
//     return(
//         <div>
//             <button onClick={props.handleClick}>Click</button>
//         </div>
//     )
// }




// Another varient of this click handler is when you need to event passed in to your click handler
// but what exactly is the type of this click event .well for that once again we rely on a react type
// The type of this event is react.mouseevent .We can also be more specific by saying this is a button click by adding 
// angle brackets html button element .we dont have to import html button element as it is readily available in the typescript environment in app.jsx

// type ButtonProps={
//     handleClick: (event:React.MouseEvent<HTMLButtonElement>)=>void
    
// }

// export const Button = (props:ButtonProps)=>{
//     return(
//         <div>
//             <button onClick={props.handleClick}>Click</button>
//         </div>
//     )
// }


// lastly you might also want to have id parameter and that is very simple ,u can see ex
type ButtonProps={
    handleClick: (event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    
}

export const Button = (props:ButtonProps)=>{
    return(
        <div>
            <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
        </div>
    )
}






























