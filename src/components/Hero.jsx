import React from 'react'
import Header from './Header/Header'
import './Hero.css'


import hero_image from "../../src/assets/hero_image.png"
import hero_image_back from "../../src/assets/hero_image_back.png"
import Heart from "../../src/assets/heart.png"
import Calories from "../../src/assets/calories.png"


import { motion } from 'framer-motion'
const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='hero'>
            <div className='blur hero-blur'></div>
            <div className='left-h'>
                <Header />
                {/* the best add div starts here */}
                <div className='the-best-ad'>
                    <motion.div initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}>
                    </motion.div>
                    <span>The best fitness club in the town</span>
                </div>
                {/* the best add div ends here */}


                {/* Hero text starts here */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you  to shape and bould your ideal body and live up your life to the fullest
                        </span>
                    </div>
                </div>

                {/* figures div */}
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>memebers joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>

                </div>

                {/* figure div ends here */}
                {/* buttons div starts here */}
                <div className='hero-button'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            {/* right div starts here */}
            <div className='right-h'>
                <button className='btn'>Join Now</button>




                <motion.div className='heart-rate'
                    // initial={{ left: '-1rem' }}
                    // whileInView={{ right: '4rem' }}
                    transition={transition}>
                    <img src={Heart}></img>
                    <span>Heart Rate</span>
                    <span>
                        BPM 116
                    </span>
                </motion.div>

                {/* image div starts here*/}
                <img src={hero_image} className="hero-image"></img>
                {/* <img src={hero_image_back} className="hero-image"></img> */}

                {/* calories */}
                <div className='calories'>
                    <img src={Calories} />
                    <div>
                        <span>
                            Calories Burnt
                        </span>
                        <span>
                            220 kcal
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero