import React from 'react'
import './Projects.css'
import Projects_data from '../../assets/projects'

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="projects-container">
                <div className="project-header">
                    <h1><span>My </span>Projects</h1>
                </div>
                <div className="projects-sec">
                    {Projects_data.map((p, i) => {
                        const isReversed = i % 2 !== 0; // Reverse every other row
                        return (
                            <div
                                className={`project ${isReversed ? 'reverse' : ''}`}
                                key={i}
                            >
                                <div className="project-img">
                                    <img src={p.p_img} alt="" />
                                </div>
                                <div className="project-details">
                                    <h2>{p.no}</h2>
                                    <h3>{p.p_title}</h3>
                                    <p>{p.p_disc}</p>
                                    <img src={p.p_more} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
