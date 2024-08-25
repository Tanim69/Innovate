import React from 'react'
import who from '../../../src/assets/who.png'
import one from '../../../src/assets/one.png'
import work from '../../../src/assets/work.png'



const Who = () => {
  return (
    <div className='max-w-container mx-auto flex gap-x-[30px] '>
       

       <div className='w-[50%] '>
                <img src={who} alt="" className='w-[542px] h-[545px]' />
       </div>
        {/* 50% doneeeeeeeeeeeeeeeee */}
       <div className='w-[50%]'>
       <img src={work} alt="" />
        <h1 className='text-[48px] font-extrabold  mb-[26px]'>Who We Are</h1>
        <p className='text-[18px] w-[440px] h-[180px] text-[#6C7D93]'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
        <h2 className='mt-[-70px] text-[#6C7D93]'>Join the 10.000+ Companys Trusting </h2>


        <div className='flex'>
            <img src={one} alt="" />
            <img src={one} alt="" />
            <img src={one} alt="" />
        </div>
        <div className='flex'>
            <img src={one} alt="" />
            <img src={one} alt="" />
            <img src={one} alt="" />
        </div>
       </div>



    </div>
  )
}

export default Who