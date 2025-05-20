import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import React , {useState} from 'react' ;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import TextForm from './Components/TextForm';

function App() {
  const [mode , setMode] = useState("light") ;
  const [alert , setAlert] = useState(null) ;

  const showAlert = (message , type) => {
    setAlert ({
      msg : message , 
      type : type 
    })
    setTimeout(() => {
      setAlert(null) 
    } , 2000)
  }
  
  const toggleMode = () => {
    if( mode === "light" ) {
      setMode("dark") ;
      document.body.style.backgroundColor = 'grey' ; 
      showAlert("Dark mode has been enabled" , "success") ;
    }
    else {
      setMode("light") 
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode has been enabled" , "success") ;
    }
  }

  return (
    <>
      <Router>  
      <Navbar title="TextUtils" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode} /> 
      <Alert alert = {alert} />

      
        <Routes>
          <Route exact path='/about' element = {<About/>}/>
          <Route exact path='/' element={<TextForm heading = "Enter Text to Analyze" mode = {mode} showAlert = {showAlert}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
