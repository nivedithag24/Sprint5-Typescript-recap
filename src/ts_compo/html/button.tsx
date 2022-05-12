import React from "react"

type ButtonProps={
    variant:'primary' | 'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>

export const Custombutton=({variant,children,...rest}:ButtonProps)=>{
    return <button className={`class-with-${variant}`}{...rest}>{children}</button>
}


// omit keyword: It takes an object type and removes the specified properties.
































