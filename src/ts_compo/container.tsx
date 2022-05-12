
// export const Container = () =>{
//     return(
//         <div>
//             <h2 style={{border:'1px solid black',padding:'1rem'}}>Text content goes here</h2>
//         </div>
//     )
// }



type ContainerProps={
    styles:React.CSSProperties
}

export const Container = (props:ContainerProps) =>{
    return(
        <div>
            <h2 style={props.styles}>Text content goes here</h2>
        </div>
    )
}