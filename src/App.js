import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React , {useState} from 'react' ;

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
      <Navbar title="TextUtils" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode} /> 
      <Alert alert = {alert} />
      <TextForm heading="Enter Your Text to Analyze" mode ={mode} />
    </>
  );
}

export default App;
