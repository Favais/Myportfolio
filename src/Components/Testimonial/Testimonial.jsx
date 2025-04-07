import React from 'react'
import './Testimonial.css'
import Testimonials_data from '../../assets/testimonials'

const Testimonial = () => {
    return (
        <div id='testimonial' className='testimonials'>
            <div className="testimonials-container">
                <div className="testimonials-title">
                    <h2>My</h2>
                    <h2>Testimonial</h2>
                </div>
                <div className="testimonials-body">
                    {Testimonials_data.map((t, i) => {
                        return (
                            <div key={i} className="testimonial">
                                <img src={t.t_img} alt="" />
                                <p className='comm'>{t.t_body}</p>
                                <hr />
                                <p className='author-name'>{t.t_name}</p>
                                <p className='author-title'>{t.t_title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonial
