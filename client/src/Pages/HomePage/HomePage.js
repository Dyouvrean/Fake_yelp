import React from 'react'
import {useStyles } from './style'
import {useContext, useEffect, useState} from 'react'
import Home from '../../Components/Home/index'


const HomePage =()=>{
    const classes = useStyles()

    return(
        <div >
        <div >
            <div >
                <Home/>
            </div>
        </div>
        </div>
    )
}
export default HomePage