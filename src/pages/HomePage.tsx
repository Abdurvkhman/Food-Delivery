import '../css/styles.css'
import React from 'react'
import { Sections } from '../components/Sections'

export const HomePage = () => {
    
    return(
       <>
        <Sections title='Section1' id='section1'/>
        <Sections title='Section2' id='section2'/>
        <Sections title='Section3' id='section3'/>
        <Sections title='Section4' id='section4'/>
        <Sections title='Section5' id='section5'/>
       </>
    )
}