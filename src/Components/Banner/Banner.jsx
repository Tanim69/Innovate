import React from 'react'
import work from '../../../src/assets/work.png'


const Banner = () => {
  return (

    <div className='bg-[#F5F7FA]'>


      <div className='max-w-container mx-auto py-[96px] '>
        <div className='flex gap-x-[105px] items-center'>
          <div className='w-[50%]'>
            <img src={work} alt="" />
            <h1 className='text-[64px] font-bold leading-[76px] '>We Are Digital <br /> <span className='text-[#FF7628]'>Marketing </span>Agency</h1>
            <p className='pt-[16px] w-[560px]'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>


            {/* BUTTON */}

            <div className='mt-[32px]'>
              <a className=' font-pops text-base font-semibold text-white bg-[#FF7628] border-2 px-[30px] md:py-[13px] py-[5px] md:mt-[30px] rounded-full' href="#">get free quoto</a>
            </div>



          </div>
          <div className='w-[50%] flex relative'>
            <div className=' bg-banner absolute top-[-200px] right-[-180px] bg-cover bg-center bg-no-repeat py-[96px] h-[407px] w-[391px]'>
            </div>
            <div className=' bg-box absolute top-[0px] right-[0px] bg-cover bg-center bg-no-repeat py-[96px] h-[307px] w-[300px]'>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Banner