import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import axios from 'axios';
import APIService from '../../api/ApiService';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const BusinessReview = ({Business_id}) => {

    const ReviewsPerPage = 10;
    const [reviewlist, setreviewlist] =useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [total_page, setTotal] = useState(0)
    var indexOfLastReview = currentPage * ReviewsPerPage;
    var indexOfFirstReview = indexOfLastReview - ReviewsPerPage;
    var currentReviews = reviewlist.slice(indexOfFirstReview, indexOfLastReview);

    useEffect(() => {
        const data = {
        BusId: Business_id
        };
        APIService.Get_business_review(data).then((res)=>{
            setreviewlist(res.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
            setTotal(Math.ceil(res.data.length / ReviewsPerPage))
            console.log(res.data);
            console.log(Math.ceil(res.data.length / ReviewsPerPage))
        });
      }, []);

  useEffect(()=>{
    indexOfLastReview = currentPage * ReviewsPerPage;
    indexOfFirstReview = indexOfLastReview - ReviewsPerPage;
    currentReviews = reviewlist.slice(indexOfFirstReview, indexOfLastReview);

  },[currentPage])

   const  handlePageReduce =() =>{
      if ((currentPage-1)<1){
         setCurrentPage(1);
      }
      else{
        setCurrentPage(currentPage-1);
      }
    }


   const handlePageIncrease =()=>{
      if ((currentPage+1)<=total_page){
        setCurrentPage(currentPage+1);
     }
    }

      return (
        <div>
            <div style={{ fontSize: '70px' }}>
           Review:
           </div>
           <div>
           {currentReviews.map((result)=>{
            console.log(result)
            return <ReviewCard info= {result}/>
          })
          }
           </div>

           <div style={{ textAlign: 'center' }}>
           {((currentPage-1)>1) && <FaAngleLeft onClick={handlePageReduce}/>}
           {((currentPage+1)<=total_page)&& <FaAngleRight onClick={handlePageIncrease}/>}
           </div>
        </div>
        

      )


}
export default BusinessReview