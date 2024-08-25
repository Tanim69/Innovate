import React from 'react'

import logo from '../../../src/assets/logo.png'


const Footer = () => {
    return (
        <div className='md:w-full'>

            <div className='px-6 md:px-0  max-w-container mx-auto md:flex '>

                <div className='md:w-[40%] '>

                    <img className=' md:pt-[64px] pt-[20px] md:pb-[33px]' src={logo} alt="logo" />
                    <div>
                        <p className='text-[#6C7D93] text-[18px]'>Install any demo or template with a single click. You <br /> can mix and match all the demos & templates. Every <br /> demo can be turned into one or multi-page.</p>

                        <h4 className='text-[#6C7D93] mt-[90px] mb-[60px]'>@2024 Innovate.All rights reserved.</h4>
                    </div>



                </div>

                <div className='md:w-[20%] '>


                    <h3 className='text-[#413F45] md:pt-[64px] text-base text-[24px] font-pops font-semibold pb-[21px]'>Features</h3>
                    <h3 className='text-[18px] text-[#6C7D93]  font-semibold pb-[15px] '>About us</h3>
                    <h3 className='text-[18px] text-[#6C7D93]  font-semibold pb-[15px] '>Blog</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Contact us</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Pricing</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold '>Testimonials</h3>


                </div>
                <div className='md:w-[20%] '>


                    <h3 className='text-[#413F45]  md:pt-[64px] text-base font-pops font-semibold pb-[21px] text-[24px]'>Product</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Task Management</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Company growth</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Time tracking</h3>
                    


                </div>

                <div className='md:w-[20%]  '>
                    <h3 className='text-[#413F45] md:pt-[64px] text-base  font-semibold text-[24px] pb-[21px]'>Support</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Customer service</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Accessibility</h3>
                    <h3 className='text-[18px] text-[#6C7D93] font-semibold pb-[15px] '>Contact us</h3>
               


                </div>



            </div>

        </div>
    )
}

export default Footer
