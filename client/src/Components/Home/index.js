import { useRef, useState, useEffect, useContext } from 'react';
import { useStyles } from "./style";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Home = () => {
  
  const classes = useStyles()
  return (
    
    
    <div style={{marginTop:'10%'}}>

      <div className={classes.TitleForm} >
        <div className={classes.titleWrapper}>
          <h3 className={classes.title}>Welcome!</h3>
          <h5>HEllo</h5>
        </div>
      </div>
      
    </div>
  )
}
export default Home