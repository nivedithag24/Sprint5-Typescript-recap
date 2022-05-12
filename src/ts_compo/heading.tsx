type HeadingProps={
    children:string
}

export const Heading=(props:HeadingProps)=>{
    return(
        <div>
            {/* <h1>Placeholder text</h1> */}
            <h2>{props.children}</h2>
        </div>
    )
}