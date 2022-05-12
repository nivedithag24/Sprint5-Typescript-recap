type OscarProps={
    children:React.ReactNode //there are a few types you can specify but the safest bet is react.reactnode
    // which is the type provided by the react types package 
}

export const Oscar=(props:OscarProps)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}