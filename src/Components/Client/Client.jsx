import React from 'react'
import work from '../../../src/assets/work.png'
import btnzero from '../../../src/assets/btnzero.png'
import btnone from '../../../src/assets/btnone.png'
import client from '../../../src/assets/client.png'
import client2 from '../../../src/assets/client2.png'


const Client = () => {
    return (
        <div className='max-w-container mx-auto mt-[200px]'>

            <div className='flex '>

                <div className='w-[33%] '>
                    <div className='w-[348px] h-[386px]  rounded-[20px]'>

                        <img src={work} alt="" />
                        <h1 className='font-extrabold text-[48px]'>Client Review</h1>
                        <p className='text-[18px] '>people use digital devices instead <br /> of visiting physical shops, digital <br /> marketing campaigns are <br /> becoming more prevalent and <br /> efficient.  </p>
                        <div className='flex'>
                            <img src={btnzero} className='h-[64px] w-[64px]' alt="" />
                            <img src={btnone} className='h-[64px] w-[64px] ' alt="" />
                        </div>
                    </div>
                </div>






                {/* done */}
                <div className='w-[33%]'>
                    <div className='w-[370px] h-[378px] rounded-[20px] bg-[#D8EAFF] pt-[18px] pb-[18px] pl-[26px] pr-[26px]'>
                        <p className='text-[18px]'>Content Marketing is the <br /> other fold of online <br /> advertisement. If you are <br /> looking to build. digital <br /> marketing campaigns are <br /> becoming more prevalent <br /> and efficient. </p>
                        <div className='flex'>
                            <div> 
                                <img src={client} alt="" />
                            </div>
                            <div className='mt-[20px] ml-[10px]'> 
                                <h1 className='font-semibold text-[24px]'>Jane Cooper</h1>
                                <p>Fashion Designer</p>
                            </div>


                        </div>




                    </div>
                </div>


                {/* done */}


                <div className='w-[33%]'>
                    <div className='w-[370px] h-[378px] rounded-[20px]  pt-[18px] pb-[18px] pl-[26px] pr-[26px]'>
                        <p className='text-[18px]'>Content Marketing is the <br /> other fold of online <br /> advertisement. If you are <br /> looking to build. digital <br /> marketing campaigns are <br /> becoming more prevalent <br /> and efficient. </p>
                        <div className='flex'>
                            <div> 
                                <img src={client2} alt="" />
                            </div>
                            <div className='mt-[20px] ml-[10px]'> 
                                <h1 className='font-semibold text-[24px]'>Eleanor Pena</h1>
                                <p>Architecture</p>
                            </div>


                        </div>




                    </div>
                </div>


                {/* done */}
            </div>






        </div>
    )
}

export default Client