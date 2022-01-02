import React from 'react'
import "./styles.css"
const Year=new Date().getFullYear();
const Footer = () => {
    return (
        <div className='Foot' >
            Copyright © {Year}
        </div>
    )
}
export default Footer
