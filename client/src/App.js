import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  const [data,setData] = useState([{}])
  const [review,setReview]= useState([{}])
  useEffect(()=>{
    fetch("/members").then(
      res=>res.json()
    ).then(
      data=>{setData(data)
      console.log(data)
    }
    )
  },[])

  return (
   <div>

   </div>
  );
}

export default App;
