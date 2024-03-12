import { useRef, useState, useEffect, useContext } from 'react';
import { useStyles } from "./style";
import { Link } from 'react-router-dom';

import {FaSearch} from "react-icons/fa";
import "./Searchbar.css"
import axios from 'axios';
import APIService from '../../api/ApiService';
import CustCard from './Card';

const Home = () => {
  
  const classes = useStyles()
  const [input,setInput] = useState("")
  const [opt,setopt] = useState({})
  const [loading,setload] = useState(true)
  const [business_list, setbusiness_list] = useState([])
  const [state,setstate] = useState("")
  const [star,setstar] = useState("")



  const send_partial =(value)=>{
    const data = {
      word: value
    };
   return APIService.InsertArticle(data);
  }
  
  const handleChange =(value)=>{
    setInput(value);
    if(value){
      send_partial(value).then((res)=>{
      console.log(Object.entries(res.data).sort((a, b) => a[1]-b[1]));
      setopt(res.data)
    })
    }
    else{
      setopt({})
    }
  }

  const handleState =(value)=>{
    setstate(value);
  }
  const handleStar =(value)=>{
    setstar(value);
  }
  const handleSearch = async (event)=>{
    event.preventDefault();
    const data = {
      name: input,
      state: state,
      star:star
    };
    setInput("")
    setstate("")
    setstar("")
    setopt({})
    return APIService.Search_bus(data).then((res)=>setbusiness_list(res.data));
}







  return (
    <div>
         <div className='input-wrapper'>
            <FaSearch id= 'search-icon'/>
            <input className={classes.input}
               placeholder="Enter Business Name" 
               value={input}
               onChange={(e)=>handleChange(e.target.value)}
            />
            <input className={classes.input}
               placeholder="Enter state" 
               value={state}
               onChange={(e)=>handleState(e.target.value)}
            />
            <input className={classes.input}
               placeholder="Enter star" 
               value={star}
               onChange={(e)=>handleStar(e.target.value)}
            />
            <button type="submit" className={classes.button} onClick={handleSearch} >
                            Search
            </button>
         </div>
         <div className='results-list'>
            { 
               Object.entries(opt).sort((a, b) => a[1]-b[1]).map((result,id)=>{
                return (<div key={result[0]} className='search-result'onClick={(e)=>{setInput(e.target.outerText);setopt([])}}>{result[0]}</div>)
            })
            }
          </div>
          <div className='card-wrapper'>
          {business_list.map((result)=>{
            console.log(result.business_id)
            return <CustCard Business_name = {result.name} 
                             state={result.state} 
                             stars ={result.stars} 
                             categories={result.categories} 
                             Business_id={result.business_id}/>
          })
          }
          </div>
        
    </div>
  )
}
export default Home