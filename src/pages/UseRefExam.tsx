import { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";

const UseRefExam = () => {
   
    const myRef = useRef(0);
    const [count, setCount] = useState(0)
    const handleButton = () =>{
        myRef.current = myRef.current + 1;
        setCount(count + 1)
        console.log('my Ref => ', myRef.current);
        console.log('my state => ', count);
    }
    const nameRef = useRef<HTMLInputElement | null>(null)

    // const handleSubmit = (e: React.FormEvent) =>{
    //     e.preventDefault();
    //     console.log(nameRef.current?.value)
    // }
  
    useEffect(()=>{
        nameRef.current?.focus()

    },[])
    return (
        <div>
          <button
          onClick={() => handleButton()} 
         >
            {count}
          </button>
          <p  style={{  color: 'blue',
        fontSize: '16px',}}>love you</p>
          <UseRefExamofHtmlTag />
          <CustomInput className="border border-red-500" ref={nameRef} />
        </div>
    );
};

const UseRefExamofHtmlTag = () =>{
    const nameRef = useRef<HTMLInputElement | null>(null)

    // const handleSubmit = (e: React.FormEvent) =>{
    //     e.preventDefault();
    //     console.log(nameRef.current?.value)
    // }

    useEffect(()=>{
        nameRef.current?.focus()

    },[])

    return(
        <>
          {/* <form >
            <input
            ref={nameRef}
             type="text" name="name" id="name" />
            <button type="submit">Submit</button>
          </form> */}
        </>
    )
}

export default UseRefExam;