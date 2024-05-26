import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('Vreme i datum: ...');
  const [note] = useState('Prikazi datum i vreme Mionica, Srbija.');

  useEffect(() => {
    const fetchMessage = () => {
      axios.get('https://allowing-secondly-jaguar.ngrok-free.app/api/message')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
          setMessage('Error fetching data from server: ' + error);
        });
    };
  
    fetchMessage(); // Fetch the data initially
    const interval = setInterval(fetchMessage, 1000); // Fetch data every second
    return () => clearInterval(interval); // Clear the interval when the component unmounts
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
