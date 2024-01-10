import { useReducer } from "react";


const initialState = {count: 0};

const reducer = (currentState: typeof action, action) =>{
    console.log('CurrentState', currentState.count);
    console.log('action', action.payload)
    switch (action.type) {
        case "increment":
            
           return {count: currentState.count + 1};
        case "decrement":
            
           return {count: currentState.count - 1};
        case "incrementByThree":
            
           return {count: currentState.count +  action.payload};
    
        default:
            return currentState;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "incrementByThree", payload: 3})}>IncrementBy3</button>
            <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
        </div>
    );
};

export default UseReducer;