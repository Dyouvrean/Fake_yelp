import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import axios from 'axios';
import APIService from '../../api/ApiService';
import { useParams } from 'react-router-dom';
import BusinessReview from './BusinessReview';

const Business = () => {
     
    const {BusId} = useParams();
    const [Detail,setDetail] = useState({})
    const [Name,setName]= useState("")
    const [City,setCity] = useState("")
    const [Address,setAddress] = useState("")
    const [categories,setcategories] = useState("")
    const [zip, setzip] = useState("")
    const [star, setstar] = useState("")
    const [hour, sethour] = useState("")
    const [state, setstate] = useState("")
    const [attr,setattr] = useState("")
    const [loading,setload] = useState(true)

    useEffect(() => {
        const data = {
        BusId: BusId
        };
        APIService.Get_business_detail(data).then((res)=>{setDetail(res.data[0]);console.log(res);
          // setload(false);
        });
      }, []);

    useEffect(() => {
       console.log(Detail);
       setload(false);
      }, [Detail]);


    useEffect(() => {
       setName(Detail.name);
       setAddress(Detail.address);
       setcategories(Detail.categories);
       setCity(Detail.city);
       setzip(Detail.postal_code);
       setstar(Detail.stars);
       sethour(Detail.hours);
       setstate(Detail.state);
       setattr(Detail.attributes);
    }, [Detail]);

    if (loading || (hour === undefined) || (attr === undefined)) {
      return <div>Loading...</div>;
    }
  
    return (<div style={{ fontSize: '50px' }}>
            <div>{Name}</div>
            <div>State: {state}</div>
            <div>City:{City}</div>
            <div>Address:{Address}</div>
            <div>Postal_code:{zip}</div>
            <div>Categories:{categories}</div>
            <div>Stars: {star}</div>
            <div> Operation Hours:</div>
           
            <ul>
            {
            Object.entries(hour).map(([day, time]) => {
              return (
                  <li key={day}>
                  {day}: {time}
                  </li>
            )})}
           </ul>

          <div>Feature:</div>
          <ul>
            {
            Object.entries(attr).map(([attr, yes]) => {
              if (yes == 'True'){
              return (
                  <li key={attr}>
                  {attr}
                  </li>
                     )
              }
            }
            )
            }
          </ul>
          
          <div>
            <BusinessReview Business_id = {BusId} />
           
          </div>

            
          </div>
    )
  }
export default Business