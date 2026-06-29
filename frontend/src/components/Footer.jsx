import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid sm:items-start grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='-mt-2 mb-4 w-36'></img>
                    <p className='w-full md:w-3/4 text-gray-600 leading-7'>
                       OutfitZone is your destination for modern, stylish, and affordable fashion. We believe that great style should be accessible to everyone, which is why we carefully curate collections that combine quality, comfort, and the latest trends. Whether you're looking for everyday essentials or statement pieces, OutfitZone is committed to helping you express your unique style with confidence. Shop with ease, enjoy a seamless experience, and discover fashion that fits your lifestyle.
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