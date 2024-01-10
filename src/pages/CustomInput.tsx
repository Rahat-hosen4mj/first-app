import { forwardRef } from "react";

type TcustomInputRef = {
    className : string;
}
const CustomInput = forwardRef<HTMLInputElement,TcustomInputRef >(({className}, nameRef) => {
    return (
        <div>
           <form >
            <input
            ref={nameRef}
            className={className}
             type="text" name="name" id="name" />
            <button type="submit">Submit</button>
          </form> 
        </div>
    );
});

export default CustomInput;