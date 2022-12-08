import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tynpi9c', 'template_dovrq26', form.current, 'JfkU9_YhbPPeitnBe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className='Join' id='join-us'>
                <div className='left-j'>
                    <hr />
                    <div>
                        <span className='stroke-text'>READY TO</span>
                        <span>LEVEL UP</span>

                    </div>
                    <div>
                        <span> YOUR BODY</span>
                        <span className='stroke-text'>WITH US?</span>

                    </div>
                </div>
                <div className='right-j'>
                    <form className='email-container' ref={form} onSubmit={sendEmail}>
                        <input type="email" placeholder='Enter your Email address' name='user_email'></input>

                        <button className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Join