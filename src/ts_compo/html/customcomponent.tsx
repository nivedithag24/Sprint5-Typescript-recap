import React from 'react'
import { Greet } from '../greet'
const Customcomponent = (props:React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default Customcomponent
