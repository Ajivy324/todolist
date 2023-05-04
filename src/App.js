import './App.css';
import React,{useState} from 'react';
import Display1 from './components/Display1';
import Form from './components/Form';

function App() {
  const [currentItem, setCurrentItem] = useState([]);
  


  return (
    <div className="App">
      <Form currentItem={currentItem} setCurrentItem= {setCurrentItem}/>
      <Display1 currentItem={currentItem} setCurrentItem= {setCurrentItem}/>
    </div>
  );
}

export default App;
