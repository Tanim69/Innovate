import React from 'react'
import work from '../../../src/assets/work.png'


const Blog = () => {
    return (
        <div className='max-w-container mx-auto'>
            <div className='text-center'>
                <img src={work} className='mx-auto mt-[60px]' alt="" />

                <h1 className='text-center text-[36px] pb-[8px] font-bold text-[#192239]'>Our Latest Blog</h1>
                <p className='text-[#6C7D93] pb-[70px]'>We provide digital experience services to startups <br /> and small businesses.

                </p>
            </div>
            {/* div start */}


<div className='flex'> 

    
<div className='w-[34%]'>
                <div className='w-[370px] h-[468px] bg-[#EFEFEF] rounded-[20px]'>
                    <div className='bg-[#C4C4C4] w-[370px] h-[242px] rounded-t-[20px]'></div>
                    <div>
                        <h1 className='pl-[30px] text-[24px] medium '>How to Be Ahead <br /> of Stock Changes</h1>
                        <p className='pl-[30px] pt-[30px]'>By John  - 5 Comments</p>
                        <button className='ml-[30px] mt-[10px]'>Read more</button>
                    </div>
                </div>

            </div>


            <div className='w-[34%]'>
                <div className='w-[370px] h-[468px] bg-[#EFEFEF] rounded-[20px]'>
                    <div className='bg-[#C4C4C4] w-[370px] h-[242px] rounded-t-[20px]'></div>
                    <div>
                        <h1 className='pl-[30px] text-[24px] medium '>Online Reputation <br /> And Management</h1>
                        <p className='pl-[30px] pt-[30px]'>By John  - 5 Comments</p>
                        <button className='ml-[30px] mt-[10px]'>Read more</button>
                    </div>
                </div>

            </div>



            <div className='w-[34%]'>
                <div className='w-[370px] h-[468px] bg-[#EFEFEF] rounded-[20px]'>
                    <div className='bg-[#C4C4C4] w-[370px] h-[242px] rounded-t-[20px]'></div>
                    <div>
                        <h1 className='pl-[30px] text-[24px] medium '>Tips To Move Your <br /> Project More Forward
                        </h1>
                        <p className='pl-[30px] pt-[30px]'>By John  - 5 Comments</p>
                        <button className='ml-[30px] mt-[10px]'>Read more</button>
                    </div>
                </div>

            </div>

</div>





        </div>
    )
}

export default Blog