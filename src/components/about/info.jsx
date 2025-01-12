import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bxs-graduation about__icon'></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">BCA<br/>(2023-2026)</span>
        </div>
        
        <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>

        <div className="about__box">
        <i className='bx bx-world about__icon' ></i>
            <h3 className="about__title">Open Source</h3>
            <span className="about__subtitle">GSSOC 24<br/>(Contributer)</span>
        </div>

    </div>
  )
}

export default info