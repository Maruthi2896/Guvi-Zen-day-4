//import logo from './logo.svg';
import './App.css';
import {useState }from 'react';

function App() {
  const [like,setLike]=useState(0);
  const [dislike,setDislike]=useState(0);
  return (
    <div className="App">
      <div> 
 <button onClick={()=>setLike(like-1)}>Decrement- {like} </button>
 <button  onClick={()=>setDislike(dislike+1)}> Increment-{dislike} </button>
      </div>
    </div>
  );
}
// ()=>setLike(like+1)
// ()=>setLike(like-1)
export default App;
