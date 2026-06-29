import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}></Title>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <b className='text-gray-800'>Our Store</b>
            <p>12345 Fashion Street<br/>Style City, SC 12345</p>
            <p className='text-gray-600'>Tel: (555) 123-4567<br/>Email: contact@outfitzone.com</p>
            <b className='text-gray-800'>Careers at Outfitzone</b>
            <p className='text-gray-600'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
       </div>

      <NewsLetter/>
    </div>
  )
}

export default Contact