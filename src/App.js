// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [numbers, setNumbers] = useState([]);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/numbers?url=${url}`);
      setNumbers(response.data);
    } catch (error) {
      console.error('Unable to get numbers', error);
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={fetchNumbers}>get Numbers</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;