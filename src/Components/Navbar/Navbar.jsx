import React from 'react'
import logo from '../../../src/assets/logo.png'

const Navbar = () => {
  return (
      
  <div className='bg-[#F5F7FA]'>
      <div className='max-w-container mx-auto '>
      <nav className=" navbar  ">
  <div className="container mx-auto lg:navbar-container relative ">
    {/* <a href="#">LOGO</a> */}
    <img  src={logo} alt="" />
      <label
        for="toggle-btn"
        className="toggle-btn-responsive lg:toggle-btn "
      >
        &#8801;
      </label>
      <input id="toggle-btn" type="checkbox" hidden />
      <div className="navbar-responsive lg:navbar-desktop md:justify-between pl-[70px]  ">
        <ul  >
          <li
            tabIndex={0}
            className="dropdown-container-mobile lg:dropdown-container-dekstop"
          >
            <a className='pr-[40px]'>Home</a>
          </li>
          <li>
            <a className='pr-[40px]'>About</a>
          </li>
          <li>
            <a className='pr-[40px]'>Service</a>
          </li>
          <li>
            <a className='pr-[40px]'>Portfolio</a>
          </li>
          <li>
            <a className='pr-[40px]'>Price</a>
          </li>
          <li>
            <a className='pr-[100px]'>Blog</a>
          </li>
        </ul>
        <div >
          {/* <button className="bg-white rounded px-[20px]">Log In</button> */}
          <button className=" bg-[#FF7628]  px-[28px] py-[14px] rounded-full">Contact Us</button>
        </div>
      </div>
  </div>
</nav>

  </div>
  </div>
  )
}

export default Navbar







