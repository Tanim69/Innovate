import React from 'react'
import work from '../../../src/assets/work.png'
import pic1 from '../../../src/assets/pic1.png'
import pic2 from '../../../src/assets/pic2.png'
import pic3 from '../../../src/assets/pic3.png'
import pic4 from '../../../src/assets/pic4.png'
import pic5 from '../../../src/assets/pic5.png'
import pic6 from '../../../src/assets/pic6.png'


const Work = () => {
  return (

  
      <div className='max-w-container mx-auto'>
        <img src={work} className='mx-auto' alt="" />
        <h1 className='font-extrabold text-[48px] text-center text-[#192239]'>Work Showcase </h1>
      <div className='flex gap-x-[50px] mt-[30px] text-[#6C7D93] font-semibold text-[24px]'>
      <ul className='text-[#FF7628]'>All</ul>
      <ul>Digit Mkt</ul>
      <ul>Branding</ul>
      <ul>Content Mkt</ul>
      <ul>Social Media Mkt</ul>
      </div>
      <div className='flex gap-x-[26px] mt-[26px]'>
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
      </div>
      <div className='flex gap-x-[26px] mt-[20px]'>
      <img src={pic4} alt="" />
        <img src={pic5} alt="" />
        <img src={pic6} alt="" />
      </div>
      </div>
   

  )
}

export default Work