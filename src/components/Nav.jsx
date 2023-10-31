import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show,setshow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setshow(true)
            }
            else{
                setshow(false)
            }
        })
    })
  return (
    <div className={`${show && 'nav-bar'} nav`}>
        <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="no image" />
    </div>
  )
}

export default Nav