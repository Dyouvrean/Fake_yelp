import React from 'react'
import {useStyles } from './style'
import {useContext, useEffect, useState} from 'react'
import Home from '../../Components/Home/index'


const HomePage =()=>{
    const classes = useStyles()

    return(
        <div >
        <div className={classes.pageContainer} >
            <div className={classes.loginContainer}>
                <Home/>
            </div>
        </div>
        </div>
    )
}
export default HomePage