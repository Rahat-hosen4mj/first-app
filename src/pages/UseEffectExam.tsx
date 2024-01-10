import {  useEffect, useState } from "react";

const UseEffectExam = () => {
//    const [hidden, setHidden] = useState(false);
   
      const [user, setUser] = useState({name: '', email:''})
      console.log(user)
      useEffect(()=>{
        console.log('Render')
        
      },[user.name, user.email])

    return (
        <div>
            {/* <button
             onClick={() => setHidden(prev => !prev)}
             className="btn btn-primary">
               {hidden ? 'show' : 'hide' }
                </button>
          {!hidden && <Todo />} */}
          <input
           onBlur={(e) => setUser({...user, name: e.target.value})} 
          type="text" name="name" id="name" />
          <input 
          onBlur={(e) => setUser({...user, email: e.target.value})} 
          type="text" name="email" id="email" />
        
        </div>
    );
};

// const Counter = () =>{
//     const [count, setCount] = useState(0);
//     useEffect(() => {
        
//        const setIntervalId =  setInterval(() =>{
//         console.log('render')
//            setCount(prevCount => prevCount + 1)
//         }, 1000);

//         return () =>{
//             clearInterval(setIntervalId)
//         }
        
//     },[]);
//     return (
//         <div>
//             <h1 className="border border-red-500 p-10">{count}</h1>
      
//         </div>
//     )
// }

// const Todo = () =>{
//     const controller = new AbortController();
//     const signal = controller.signal;

//     // const [todo, setTodo] = useState([])
//    useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1", {signal})
//     .then(res => res.json())
//     .then(data => alert(data.title))

//     return () =>{
//         controller.abort()
//     }
//    },[])
//     return(
       
//             <h2>Todo</h2>
       
//     )
// }

export default UseEffectExam;