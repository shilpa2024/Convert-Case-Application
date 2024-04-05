import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
// import About from './components/About';
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500); // Hide alert after 3 seconds
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title='Shilpa' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter Your Text :" mode={mode} />
      </div>



    </>
  );
}

export default App;
