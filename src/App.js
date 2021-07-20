import { React } from 'react';
import Results from './Components/Results';
export default function App(props) {
  const sum =(n1, n2) => {
    return n1 + n2;
  }
  return (
    <>  
     <Results n1={3} n2={4} sum={sum}/>
    </>
  );
}
