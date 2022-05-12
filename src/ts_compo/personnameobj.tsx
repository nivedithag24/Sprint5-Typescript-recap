import { Person } from './person';

export const Personnameobj =()=>{
    const personName={
        first:'Clark',
        last:'Kent'
    }
    return(
        <div>
            <Person name={personName} />
        </div>
    )
}