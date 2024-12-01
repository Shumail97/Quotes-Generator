import './App.css';
import React, { useEffect,useState } from 'react'; 
import axios from 'axios';

function App()  {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.kanye.rest');
      console.log(response.data.quote)
      setQuote(response.data.quote);
      setAuthor(response.data.quoteAuthor || 'Unknown');
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };
  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div className="Quote-container">
         <p className="Quote">{quote}</p>
        <p> {author}</p>
      </div>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default App;








