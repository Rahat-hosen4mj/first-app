import { useState } from "react";

const UseStateExample = () => {
    const [user, setUser] = useState({name: '', email: ''})
    const handleForm = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(user)
    }

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) =>{
        // console.log(user);
        
        const name = e.target.name;
        const value = e.target.value
        console.log(value)
        setUser({...user, [name]:  value})
        
    }
 
    return (
        <form onSubmit={handleForm} action="">
            <input onChange={handleChange} type="text" name="name" id="first_name" />
            <input onChange={handleChange} type="text" name="email" id="email" />
            <input  type="submit" value="submit"  />
        </form>
    );
};

export default UseStateExample;