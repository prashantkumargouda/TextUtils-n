import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText = "About Us"/> 
      <TextForm heading="Enter Your Text to Analyze"/>
    </>
  );
}

export default App;
