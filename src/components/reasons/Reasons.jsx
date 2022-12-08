import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div className='Reasons' id='reasons'>
            <div className='left-r'>
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
            </div>
            <div className='right-r'>
                <span>Some reasons to choose us</span>
                <div>
                    <span className='stroke-text'>WHy</span>
                    <span>  Choose Us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} /><span>OVER 140+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <img src={tick} /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} /><span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} /><span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{ color: "var(--gray)", fontWeight: "normal" }}>OUR PARTNERS</span>
                <div className='partners'>
                    <img src={nb} />
                    <img src={adidas} />
                    <img src={nike} />
                </div>
            </div>
        </div>
    )
}

export default Reasons