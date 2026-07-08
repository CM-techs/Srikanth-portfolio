import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post', error));
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      {/* {post && (
        <section id="axios-demo" style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--code-bg)' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
      )} */}
    </>
  );
}

export default App;
