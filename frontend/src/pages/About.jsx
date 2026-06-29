import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsLetter from '../components/NewsLetter';
const About = () => {
  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1 ={'About'} text2={'Us'}/>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5'src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Outfitzone was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission at Outfitzone is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
       </div>

       <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
       </div>

       <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-17 flex flex-col gap-5 border-gray-300'>
              <b>Premium Quality</b>
              <p className='text-gray-600'>We offer high-quality products from trusted brands. Every item is tested to ensure it meets our strict quality standards.</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-17 flex flex-col gap-5 border-gray-300'>
              <b>Fast Delivery</b>
              <p className='text-gray-600'>Get your orders delivered quickly and efficiently. We partner with reliable couriers to ensure your purchases arrive safely and on time.</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-17 flex flex-col gap-5 border-gray-300'>
              <b>24/7 Support</b>
              <p className='text-gray-600'>Contact us anytime for assistance. Our customer service team is available around the clock to help answer your questions.</p>
           </div>
       </div>
      <NewsLetter/>
    </div>
  )
}

export default About