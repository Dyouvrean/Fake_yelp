import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import axios from 'axios';
import APIService from '../../api/ApiService';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';


const BusinessReview = ({Business_id}) => {
    
    const [reviewlist, setreviewlist] =useState([])

    useEffect(() => {
        const data = {
        BusId: Business_id
        };
        APIService.Get_business_review(data).then((res)=>{setreviewlist(res.data)
            console.log(res.data);
        });
      }, []);

      return (
        <div>
            <div style={{ fontSize: '70px' }}>
           Review:
           </div>
           <div>
           {reviewlist.sort((a, b) => new Date(b.date) - new Date(a.date)).map((result)=>{
            console.log(result)
            return <ReviewCard info= {result}/>
          })
          }
           </div>
        </div>


      )


}
export default BusinessReview