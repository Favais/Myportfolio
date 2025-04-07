import React from 'react'
import './Skills.css'
import Skillsdata from '../../assets/Skills'

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className="skills-section">
                <div className="skills-heading">
                    <h1><span>My</span><span>Skills</span></h1>
                </div>
                <div className="skills-container">
                    <div className="skill-row-one">
                        {Skillsdata.map((service, i) => {
                            return (
                                <div key={i} className='skill'>
                                    <div className="skill-content">
                                        <img src={service.s_img} alt="" />
                                        <p>{service.s_name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
