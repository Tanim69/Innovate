import React from 'react'
import first from '../../../src/assets/first.png'
import work from '../../../src/assets/work.png'



const Service = () => {
    return (
        <div className='max-w-container mx-auto '>

            <div>
                <img src={work} className='mx-auto mt-[60px]' alt="" />

                <h1 className='text-center text-[36px] pb-[8px] mt-[40px] font-bold text-[#192239]'>Our Services</h1>
                <p className='text-center pb-[22px] text-[#6C7D93] italic'>We have been providing great <br /> flooring solutions service.</p>
            </div>
            {/* hhhhhhhhhhhhhhhh */}
            <div className='flex gap-x-10 mb-[94px]'>

                <div className='w-[370px] h-[395px] bg-[#EBF7E9] rounded-[20px]'>

                    <div className='py-[24px] text-center'>
                        <img src={first} alt="" className='ml-[152px] h-[64px] w-[64px] mt-[52px] text-center items-center' />

                        <h2 className='text-[28px] font-bold text-[#4D4D4D]'>MARKETING STRATEGY</h2>
                        <p className='w-[251px] m-auto'>Social Media has changed the way we interact & do business while creating</p>

                        <div className='relative'>
                            <div className='z-40 bg-[#FF7628] rounded-full absolute top-0 left-[130px] h-[30px] w-[30px]'></div>
                            <button className='z-40'>Read More</button>
                        </div>

                    </div>
                </div>



                <div className='w-[370px] h-[395px] bg-[#D8EAFF] rounded-[20px]'>

                    <div className='py-[24px] text-center'>
                        <img src={first} alt="" className='ml-[152px] h-[64px] w-[64px] mt-[52px] text-center items-center' />

                        <h2 className='text-[28px] font-bold text-[#4D4D4D]'>MARKETING STRATEGY</h2>
                        <p className='w-[251px] m-auto'>Social Media has changed the way we interact & do business while creating</p>

                        <div className='relative'>
                            <div className='z-40 bg-[#FF7628] rounded-full absolute top-0 left-[130px] h-[30px] w-[30px]'></div>
                            <button className='z-40'>Read More</button>
                        </div>

                    </div>
                </div>



                <div className='w-[370px] h-[395px] bg-[#FBF1EC] rounded-[20px]'>

                    <div className='py-[24px] text-center'>
                        <img src={first} alt="" className='ml-[152px] h-[64px] w-[64px] mt-[52px] text-center items-center' />

                        <h2 className='text-[28px] font-bold text-[#4D4D4D]'>MARKETING STRATEGY</h2>
                        <p className='w-[251px] m-auto'>Social Media has changed the way we interact & do business while creating</p>

                        <div className='relative'>
                            <div className='z-40 bg-[#FF7628] rounded-full absolute top-0 left-[130px] h-[30px] w-[30px]'></div>
                            <button className='z-40'>Read More</button>
                        </div>

                    </div>
                </div>

            </div>
            {/* jjjjjjjjjjjjjjjjjjjj */}


        </div>
    )
}

export default Service