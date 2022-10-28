import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Layout/Footer/Footer';
import { useState } from 'react';

function App() {
  
  const [clientx, setclientx] = useState("")
  const [clienty, setclienty] = useState("")
  const mouseHandler = (e) =>{
    setclientx(e.pageX)
    setclienty(e.pageY)
   

  }
  return (
    <div className="App" onMouseMove={(e)=>{
      mouseHandler(e)
    }}>
      <div className='cursor' style={{top:`${clienty-20}px`,left:`${clientx-20}px`}} ></div>
    <Header />
    <HomePage />
    <Footer />
    </div>
  );
}

export default App;
