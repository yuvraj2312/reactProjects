// import { useState } from 'react'
// import './App.css'

// function App() {

//   let [counter, setCounter] = useState(5)

//   const addValue = () => {
//     setCounter(counter+1)
//   }


//   const removeValue = new Promise(function(resolve, reject){
    
//     if(counter>0) {
//       setCounter(counter-1)
//     } else {
//       setCounter(`maa mat chuda lawde`)

//       setTimeout(() => {
//         setCounter(5)
//       }, 5000);

//     }
    
//   })

//   // const removeValue = async () => {
//   //   if (counter>0) {
//   //     setCounter(counter-1)
//   //   } else {
//   //     setCounter(`maa mat chuda lawde`)
//   //     await setCounter(5)
//   //   }
//   // }
  
//   //let counter = 5

//   return (
//     <>
//       <h1>bhen di lann</h1>
//       <h2>Counter Value: {counter}</h2>

//       <button onClick={addValue} >Add Value</button>

//       <button onClick={removeValue}>Remove Value {counter}</button>

//     </>
//   )
// }

// export default App



import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter('!')
    }
  };

  useEffect(() => {
    if (counter === '!') {
      const timeoutId = setTimeout(() => {
        setCounter(5);
      }, 500);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [counter]);

  return (
    <>
      <h1>!@#</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;

