import React from 'react'
import "./scrollup.css"

const ScrollUp = () => {
    
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        //when the scroll is higher than 500 viewport height , add the show-scroll className to a tag with scroll top className
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  return (
    
    <a href="" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp