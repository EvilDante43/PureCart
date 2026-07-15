import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ----------- Product Data  ----------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ----------- Product Images ----------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto'/>
          </div>
        </div>
        {/* ----------- Product Information ----------- */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index)=>(
                  <button onClick={() => setSize(item)} className={`px-5 py-3 border transition-all ${item === size ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300'}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button  onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5 border-t border-gray-300'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

        {/* ----------- Description and Review Section ----------- */}
        <div className='mt-20'>
          <div className='flex'>
            <b className='border-gray-400 border px-5 py-3 text-sm'>Description</b>
            <p className='border-gray-400 border px-5 py-3 text-sm'>Reviews</p>
          </div>
          <div className='flex flex-col gap-4 border-gray-400 border px-6 py-6 text-sm text-gray-500'>
              <p>Experience premium quality and timeless style with our carefully crafted apparel. Made from high-quality materials, each product is designed to provide exceptional comfort, durability, and a perfect fit. Whether for casual outings or everyday wear, our collection combines modern fashion with lasting quality to suit every lifestyle.</p>
              <p>Featuring a timeless design and versatile appeal, this piece effortlessly complements any wardrobe. The fabric feels soft against the skin and maintains its shape and color wash after wash. Thoughtful details in the construction ensure a flattering silhouette and long-lasting wear. Built for both style and practicality, it's easy to care for and ideal for your dynamic lifestyle.</p>
          </div>
        </div>

        {/* ----------- Display Related Products ----------- */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product