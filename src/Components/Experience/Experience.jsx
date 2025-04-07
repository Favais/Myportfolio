import React from 'react'
import './Experience.css'
import Experience_data from '../../assets/experience'

const Experience = () => {
    return (
        <div className='experiences'>
            <div className="experiences-container">
                <div className="experiences-heading">
                    <p><span>My</span> Experience</p>
                </div>
                <div className="experiences-list">
                    {Experience_data.map((exp, i) => {
                        return (
                            <div key={i} className="experience">
                                <div className='exp-title'>
                                    <div className='title-right'>
                                        <img src={exp.e_logo} alt="" />
                                        <h5>{exp.e_title}</h5></div>
                                    <span className='exp-date'>{exp.e_start_date}-{exp.e_end_date}</span>
                                </div>
                                <p className='desc'>{exp.e_desc}</p>
                            </div>

                        )
                    })}
                </div>
            </div>

        </div >
    )
}

export default Experience
