
import { useContext } from 'react'
import './App.css'
// import UseRefExam from './pages/UseRefExam'
import { ThemeContext } from './context/ThemeProvider'
// import UseEffectExam from './pages/UseEffectExam'
// import UseReducerFormExample from './pages/UseReducerFormExample'
// import UseReducer from './pages/UseReducer';
// import UseStateExample from './pages/UseStateExample';

function App() {
  

  const {dark, setDark} = useContext(ThemeContext);
  console.log(dark);
  const getDynamicStyle = (): React.CSSProperties => {
    if (dark) {
      return {
        color: 'red',
        backgroundColor: 'white',
        fontSize: '20px',
        height: '100vh',
        width: '100vw'

        // Add more CSS properties as needed
      };
    } else {
      return {
        color: 'black',
        backgroundColor: 'black',
        fontSize: '16px',
        height: '100vh',
        width: '100vw'
        // Add more CSS properties as needed
      };
    }
  };
  return (
    <>
    <div style={getDynamicStyle()}>
      <button onClick={() => setDark(!dark)}>
        Toggle
      </button>
      <p>love you zindegi</p>
    </div>
    {/* <UseStateExample ></UseStateExample> */}
      {/* <UseReducer /> */}
      {/* <UseReducerFormExample /> */}
      {/* <UseEffectExam /> */}
      {/* <UseRefExam /> */}
     
    </>
  )
}

export default App
