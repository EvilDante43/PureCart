import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm'>

            <div>
                <img src={assets.pure_cart_main_logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    PURECART is your trusted destination for premium fashion and everyday essentials. We bring you high-quality clothing that combines style, comfort, and affordability, helping you look your best for every occasion.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li className='cursor-pointer hover:text-black'>Home</li>
                    <li className='cursor-pointer hover:text-black'>About us</li>
                    <li className='cursor-pointer hover:text-black'>Delivery</li>
                    <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-123-456-7890</li>
                    <li>contact@purekart.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026@purekart.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer