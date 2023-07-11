import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner