// How to type object props:

type personProps={
    name:{
        first:string
        last:string
    }
}

export const Person= (props:personProps)=>{
    return(
        <div>
            <h1>{props.name.first} {props.name.last}</h1>
        </div>
    )
}