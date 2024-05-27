import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('Vreme i datum: ...');
  const [note] = useState('Prikazi datum i vreme u Mionici, Srbija.');

  useEffect(() => {
    const fetchMessage = () => {
      axios.get('https://allowing-secondly-jaguar.ngrok-free.app/api/message')
        .then(response => {
          console.log('Data fetched successfully:', response.data);
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error('Error fetching data from server:', error);
          setMessage('Error fetching data from server.');
        });
    };
  
    fetchMessage(); 
    const interval = setInterval(fetchMessage, 1000); 
  
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <p>{note}</p>
      </header>
    </div>
  );
}

export default App;
