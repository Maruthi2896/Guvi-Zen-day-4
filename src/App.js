import logo from './logo.svg';
import './App.css';
import useState from 'react';

function App() {
  const [like,setLike]=useState(0);
  return (
    <div className="App">
      <div>
<button onClick={()=>setLike(like+1)}> {like} Decrement</button>
<button  onClick={()=>setLike(like-1)}> {like} Increment</button>
      </div>
    </div>
  );
}


export default App;
