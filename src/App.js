import { React } from 'react';

import Clock from './Components/Clock';

export default function App(props) {
  return (
    <>  
      <Clock />
      <h2>Check the virtual DOM updating only the component up ahead</h2>
    </>
  );
}
