// Typing props:


// export const Greet=(props)=>{
//     return (
//         <div>
//             <h2>Welcome {props.name}..!! You have 10 unread messages.</h2>
//         </div>
//     )
// }

// In the above ex if v pass props as parameter then it throws an error, parameter props implicitly has any type
// Ts is telling us you have not told me what is the structure of this props you have passed, you're saying it could be any structure 
// which i am not happy about but i am pretty strict when it comes to this and you need to let me know what is the type
// for the props you are passed in.

// So we need a way to inform the type of props to ts and we do tht using the "type" keyword.At the top we use 
// type keyword and we give it a name and in the ex we call it greetprops now the compo props is an object
// in the following ex the compo accepts one prop called name which is a string so within the greet props
// so the key will be nameand the datatype is string . we have now defined the structure or type of the props that the compowill receive 
// to inform ts about this after props within paranthesis we specify colon and then the type name which is greetprops

// type GreetProps={
//     name:string
// }

// export const Greet=(props:GreetProps)=>{
//     return (
//         <div>
//             <h2>Welcome {props.name}..!! You have 10 unread messages.</h2>
//         </div>
//     )
// }

// ------------------------------------------------------------------------------------------------------------

// Basic props:

// type GreetProps={
//     name:string
//     messageCount:number
//     isLoggedIn:boolean
// }
// export const Greet=(props:GreetProps)=> {
//   return (
//     <div>
//       {/* <h2>Welcome {props.name}..!! You have {props.messageCount} unread messages.</h2> */}
//     <h2>
//         {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : `Welcome Guest` }
//     </h2>
//     </div>
//   )
// }


// ---------------------------------------------------------------------------------------------------------------------------------------

// optional type (or) optional props:you can see in app.js file v have missed the property messagecount in type greet props.
// The way we inform typescript that messagecount prop is optional is by including a question mark at the 
// end of the prop name where we define the type.


// type GreetProps={
//   name:string
//   messageCount ?:number
//   isLoggedIn:boolean
// }
// export const Greet=(props:GreetProps)=> {
// return (
//   <div>
//     {/* <h2>Welcome {props.name}..!! You have {props.messageCount} unread messages.</h2> */}
//   <h2>
//       {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` : `Welcome Guest` }
//   </h2>
//   </div>
// )
// }

// If you want to go a step further you can destructure message count from props ans assign a default value of 0

type GreetProps={
    name:string
    messageCount ?:number
    isLoggedIn:boolean
  }
  export const Greet=(props:GreetProps)=> {
    const {messageCount = 0} =props
  return (
    <div>
      {/* <h2>Welcome {props.name}..!! You have {props.messageCount} unread messages.</h2> */}
    <h2>
        {props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages` : `Welcome Guest` }
    </h2>
    </div>
  )
  }













































