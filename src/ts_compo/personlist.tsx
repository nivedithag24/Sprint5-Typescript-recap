type PersonlistProps={
    name:{
        first:string
        last:string
    }[] //array of objects shld be defined like this oly by including square brackets
}

export const Personlist = (props:PersonlistProps)=>{
    return(
        <div>
            {props.name.map((ele)=>{
                return(
                    <h2 key={ele.first}>{ele.first} {ele.last}</h2>
                )
            })}
        </div>
    )
}