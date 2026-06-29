import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid sm:items-start grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='-mt-2 mb-4 w-36'></img>
                    <p className='w-full md:w-3/4 text-gray-600 leading-7'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, velit reprehenderit unde alias voluptate dolore cum repellendus, in accusamus officia necessitatibus. Id doloribus blanditiis dignissimos a deleniti! Veritatis, modi cum?
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 9987446897</li>
                        <li>contact@outfit.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@outfit.com - All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer