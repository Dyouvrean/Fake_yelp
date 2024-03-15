import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import axios from 'axios';
import APIService from '../../api/ApiService';
import { useParams } from 'react-router-dom';


const User = () => {
    const {UserId} = useParams();
    const [userinfo, setuserinfo] = useState({})



    useEffect(() => {
        const data = {
        UserId: UserId
        };
        APIService.Get_user_info(data).then((res)=>{setuserinfo(res.data[0])
            console.log(res.data[0]);
        });
      }, []);
   

    return(
        <div>
            <div>{userinfo.name}</div>
            <div>Review:{userinfo.review_count}</div>
            <div>Fans:{userinfo.fans}</div>
            <div>Stars:{userinfo.average_stars}</div>
            <div>{userinfo.yelping_since}</div>
        </div>
    )
  
  }
export default User