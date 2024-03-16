import { useRef, useState, useEffect, useContext } from 'react';
import { useStyles } from "./style";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { FaArrowDownShortWide } from "react-icons/fa6";

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
  const [min,setmin] = useState("")
  const [max,setmax] = useState("")
  const [isAscending, setIsAscending] = useState(true);

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
  const handleStarmin =(value)=>{
    
    setmin(value);
  }
  const handleStarmax =(value)=>{
    if (value > 5){
      alert("The max star value is 5")
    }
    else{
      setmax(value);
    }
    
  }

  const handleSearch = async (event)=>{
    event.preventDefault();
    const data = {
      name: input,
      state: state,
      starmax:max,
      starmin: min
    };
    setInput("")
    setstate("")
    setmin("")
    setmax("")
    setopt({})
    return APIService.Search_bus(data).then((res)=>setbusiness_list(res.data));
}

const handleSort =() =>{
  const sortedbusiness_list = [...business_list].sort((a, b) => {
    if (isAscending) {
      return a.stars-b.stars;
    } else {
      return b.stars-a.stars;
    }
  });

  setIsAscending(!isAscending);
  setbusiness_list(sortedbusiness_list);
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
               placeholder="Enter star min" 
               value={min}
               onChange={(e)=>handleStarmin(e.target.value)}
            />
            <input className={classes.input}
               placeholder="Enter star max" 
               value={max}
               onChange={(e)=>handleStarmax(e.target.value)}
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
          
         <div className='filter-wrapper'>
         <FaStar  onClick={handleSort}/> {isAscending ? <FaArrowUpWideShort/> : <FaArrowDownShortWide />}
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