// import { useReducer } from "react";

// type CounterState = {
//   count: number;
// };
// type CounterAction = {
//   type: string;
//   payload: number;
// };
// const initialState = { count: 0 };

// function reducer(state: CounterState, action: CounterAction) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + action.payload };
//     case "decrement":
//       return { count: state.count - action.payload };
//     default:
//       return state;
//   }
// }

// export const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       Count : {state.count}
//       <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
//         Increment 10
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
//         Decrement 10
//       </button>
//     </div>
//   );
// };


// boolean type cannot be assigned to the type string.Below it indicates the boolean type ,we have specified to false which is boolean ,
// but the type v have mention is string above in the program 
// <button onClick={() => dispatch({ type: "false", payload: 10 })}></button> 


// ---------------------------------------------------------------------------------------------------------------------------

// Strict action types:

import { useReducer } from "react";

type CounterState = {
  count: number;
};
type UpdateAction={
    type:'increment' | 'decrement'
    payload:number
}
type ResetAction={
    type:'reset'
}
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload  };
    case "decrement":
      return { count: state.count - action.payload };
      case 'reset':
          return initialState
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset"})}>
       Reset
      </button>
    </div>
  );
};

// line no 53 to 60 is said to be discriminated unions in typescript and is the recommended approach for typing the reducer function.

























