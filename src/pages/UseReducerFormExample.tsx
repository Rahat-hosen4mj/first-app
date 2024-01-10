import { ChangeEvent, useReducer } from "react";
type Taction = {
    type: string;
    payload: string;
}
const initialState = {name: '', email: ''};
const reducer = (currentState: typeof initialState, action: Taction) =>{
    switch (action.type) {
        case "addName":
            return { ...currentState, name: action.payload};
        case "addEmail":
            return { ...currentState, email: action.payload};
        default:
            return currentState;
    }
}
const UseReducerFormExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleForm =(e: ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(state)
    }
    return (
        <div>
             <form  action="" onSubmit={handleForm}>
            <input 
              onChange={(e) => dispatch({type: 'addName', payload: e.target.value})}
              type="text" name="name" id="first_name" />
            <input
             onChange={(e) => dispatch({type: 'addEmail', payload: e.target.value})}
              type="text" name="email" id="email" />
            <input  type="submit" value="submit"  />
        </form>
        </div>
    );
};

export default UseReducerFormExample;