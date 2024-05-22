import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [buttonMessage] = useState('Display current date and time from Mionica, Serbia.'); // this should be fixed now ?

  useEffect(() => {
    const fetchMessage = () => {
      axios.get('http://localhost:3001/api/message')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error('There was an error fetching the data!', error);
          setMessage('Error fetching data from server.');
        });
    };
  
    fetchMessage(); // fetch the data  
    const interval = setInterval(fetchMessage, 1000); // set up an interval to fetch data every second
    return () => clearInterval(interval); // clear the interval when the component unmounts
  }, []);
  

  // Function to handle button click
  const handleButtonClick = () => {
    axios.get('http://localhost:3001/api/message')
      .then(response => {
        setMessage(response.data.message); // Update the message above the button with the current time
      })
      .catch(error => {
        console.error('There was an error with the button click request!', error);
        setMessage('Error fetching data from server.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={handleButtonClick}>Set date and time</button>
        <p>{buttonMessage}</p>
      </header>
    </div>
  );
}

export default App;
