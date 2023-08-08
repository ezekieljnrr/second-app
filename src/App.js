// import{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Body from './components/Body';
import './Counter.css';
import Text from './Text';
import { useState } from 'react';



const App = () => {
  
  const [toggle , updateToggle] = useState(false)
  return (
    <>
    <div className = 'main' >    
     <Header/>
     <Counter/>
     <Body/>
        <div>
          <button onClick={()=>{updateToggle(!toggle);
          }}>
           Toggle
          </button>
          {toggle && <Text/> }
       </div>
    

    </div>
    </>
  );
}

export default App;
