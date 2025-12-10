import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo}/>
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dignissimos odio impedit, inventore quos illum maiores amet ad nostrum omnis accusantium earum error tempora harum optio minima itaque possimus repellendus!
            </p>

        </div>
        <div >
<p className='text-x1 font-medium mb-5'>COMPANY</p>
<ul className='flex flex-col gap-1 text-gray-600'>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
        </div>
        <div>
            <p className='text-s1 font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 212 456 456</li>
                <li>contact@forveryou.com</li>

            </ul>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com- All right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer