import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import Heart from '../../assets/heart.png'
const Program = () => {

    return (
        <div className='Programs' id='programs'>
            {/* headers start here */}
            <div className='programs-header'>

                <span className='stroke-text'>Explore Our</span>
                <span>Programs</span>
                <span className='stroke-text'>To shape You</span>
            </div>


            <div className='program-categories'>

                <div className='category'>
                    <img src={Heart} />
                    <span>Strength Training" </span>
                    <span>In this program, you are trained to improve your strength through many exercises.</span>
                    <div className='join-now '><span>Join Now</span><img src={RightArrow} /></div>
                </div>
                <div className='category'>
                    <img src={Heart} />
                    <span>Cardio Training </span>
                    <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                    <div className='join-now '><span>Join Now</span><img src={RightArrow} /></div>

                </div>
                <div className='category'>
                    <img src={Heart} />
                    <span> Fat Burning</span>
                    <span>This program is suitable for you who wants to get rid of your fat and lose their weight.</span>
                    <div className='join-now '><span>Join Now</span><img src={RightArrow} /></div>

                </div>
                <div className='category'>
                    <img src={Heart} />
                    <span>Health Fitness </span>
                    <span>This programs is designed for those who exercises only for their body fitness not body building.</span>
                    <div className='join-now '><span>Join Now</span><img src={RightArrow} /></div>

                </div>


            </div>
        </div>
    )
}

export default Program