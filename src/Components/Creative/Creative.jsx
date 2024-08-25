import React from 'react'
import work from '../../../src/assets/work.png'


const Creative = () => {
    return (
        <div className='max-w-container mx-auto'>
            <img src={work} className='mx-auto mt-[60px]' alt="" />
            <div className='text-center'>
                <h1 className='text-center text-[36px] pb-[8px] font-bold text-[#192239]'>Our creative process. </h1>
                <p className='text-[#6C7D93]'>We provide digital experience services to startups <br /> and small businesses.
                </p>
            </div>

            <div className='flex'>
                <div className='w-[50%] my-auto'>
                    <div className='bg-[#EBF7E9] rounded-[20px] w-[465px] h-[207px] pl-[20px] pt-[26px]'>
                        <button>Step-1</button>
                        <h1 className='font-semibold text-[#202427] text-[30px]'>Global SEO Research</h1>
                        <p className='text-[#6C7D93] text-[18px]'> Practical tools and features make it easier <br /> to build and manage your site.
                        </p>
                    </div>
                </div>

                {/* left div done */}
                <div className='w-[50%] bg-[#C4C4C4] w-[570px] h-[324px] rounded-[20px] '></div>
            </div>
            {/* full one div done */}


            <div className='flex mt-[20px]'>
                <div className='w-[50%] bg-[#C4C4C4] w-[570px] h-[324px] rounded-[20px] '>

                </div>


                {/* left div done */}

                <div className='w-[50%] my-auto  '>
                    <div className='ml-[122px] bg-[#D8EAFF] rounded-[20px] w-[465px] h-[207px] pl-[20px] pt-[26px]'>
                        <button>Step-1</button>
                        <h1 className='font-semibold text-[#202427] text-[30px]'>Global SEO Research</h1>
                        <p className='text-[#6C7D93] text-[18px]'> Practical tools and features make it easier <br /> to build and manage your site.
                        </p>
                    </div>
                </div>
                {/* full one div done */}
            </div>
            {/* done */}


            <div className='flex mt-[20px]'>
                <div className='w-[50%] my-auto'>
                    <div className='bg-[#FBF1EC] rounded-[20px] w-[465px] h-[207px] pl-[20px] pt-[26px]'>
                        <button>Step-1</button>
                        <h1 className='font-semibold text-[#202427] text-[30px]'>Global SEO Research</h1>
                        <p className='text-[#6C7D93] text-[18px]'> Practical tools and features make it easier <br /> to build and manage your site.
                        </p>
                    </div>
                </div>

                {/* left div done */}
                <div className='w-[50%] bg-[#C4C4C4] w-[570px] h-[324px] rounded-[20px] '></div>
            </div>
            {/* full one div done */}




        </div>
    )
}

export default Creative