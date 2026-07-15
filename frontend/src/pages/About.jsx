import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-200'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_us} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>PureCart was created with a vision to make online shopping simple, reliable, and enjoyable. We believe that everyone deserves access to quality products at affordable prices. Our platform is designed to provide a seamless shopping experience, allowing customers to explore, compare, and purchase their favorite products with ease.</p>
          <p>At PureCart, we are committed to delivering high-quality products, secure transactions, and excellent customer service. From the latest fashion trends to everyday essentials, we carefully curate our collection to meet the needs of modern shoppers. Our mission is to combine quality, convenience, and trust in one place, making every purchase a satisfying experience.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At PureCart, our mission is to make online shopping simple, secure, and accessible for everyone. We are committed to delivering high-quality products, exceptional customer service, and a seamless shopping experience that builds trust and satisfaction with every purchase.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Every product at PureCart is carefully selected to meet our high standards of quality, ensuring durability, comfort, and complete customer satisfaction.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy a seamless shopping experience with our intuitive interface, secure checkout, fast delivery, and easy order tracking.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist you with prompt responses, reliable solutions, and a customer-first approach.</p>
        </div>
      </div>
      <NewsLetterBox />

    </div>
  )
}

export default About