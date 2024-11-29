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


// 2nd Example for fetching data

// function App() { 
// 	const [loading, setLoading] = useState(false); 
// 	const [posts, setPosts] = useState([]); 

// 	useEffect(() => { 
// 		const loadPost = async () => { 
// 			// Till the data is fetch using API 
// 			// the Loading page will show. 
// 			setLoading(true); 

// 			// Await make wait until that 
// 			// promise settles and return its result 
// 			const response = await axios.get( 
// 				"https://api.kanye.rest"
// 			); 

// 			// After fetching data stored it in posts state. 
// 			setPosts(response.data); 

// 			// Closed the loading page 
// 			setLoading(false); 
// 		}; 

// 		// Call the function 
// 		loadPost(); 
// 	}, []); 

// 	return ( 
// 		<>  
// 			<div className="App"> 
// 				{loading ? ( 
// 					<h4>Loading...</h4> 
// 				) : ( 
// 					posts.map() (item => {
// 						// Presently we only fetch 
// 						// title from the API 
// 						<h4>{item.title}</h4> 
//             })
//             )}
// 			</div> 
// 		</> 
// 	); 
// } 

// export default App; 






