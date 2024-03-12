import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import axios from 'axios';
import APIService from '../../api/ApiService';
import { useParams } from 'react-router-dom';

const Business = () => {
     
    const {BusId} = useParams();
    const [Detail,setDetail] = useState({})
    const [Name,setName]= useState("")
    
    
    useEffect(() => {
        const data = {
        BusId: BusId
        };
        APIService.Get_business_detail(data).then((res)=>setDetail(res.data));
        
      }, []);

    useEffect(() => {
       console.log(Detail[0])
       setName(Detail[0].name)
    }, [Detail]);


    return <div>
           {Name}
           </div>;

  }
  export default Business