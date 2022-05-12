import { Personlist } from "./personlist"

export const Personlistparent =()=>{
    const namelist=[
        {
            first:'Clark',
            last:'Kent'
        },
        {
            first:'Stark',
            last:'Wayne'
        },
        {
            first:'Lilly',
            last:'Pinto'
        },
    ]

    return(
        <div>
            <Personlist name={namelist}/>
        </div>
    )
}