import React from 'react'
import {useStyles } from './style'
import {useContext, useEffect, useState} from 'react'
import Business from '../../Components/Business/SingleBusiness'


const BusinessPage =()=>{
    const classes = useStyles()

    return(
        <div >
        <div >
            <div >
                <Business/>
            </div>
        </div>
        </div>
    )
}
export default BusinessPage