import Link from "next/link";

const Header = (props) => {
  return (
    <nav>
    <div className="container nav-1 mx-auto md:flex justify-between items-center mb-3 py-1 hidden">
        <div><span><i className="fas fa-telephone"></i>8068345971</span> | <span><i className="fas fa-mail"></i>siredet30@gmail.com</span> </div>

        <div><span>Login</span> | <span>Sign Up</span></div>
    </div>
   <div className="container nav-1 mx-auto flex justify-between items-center py-2">
          <img alt="" src="/images/logo.png" width="130" />

          <ul className="hidden md:flex">
            <li><Link href="#"><a>HOME</a></Link></li>
            <li><Link href="#"><a>SERVICES</a></Link></li>
            <li><Link href="#"><a>ABOUT US</a></Link></li>
            <li><Link href="#"><a>GALLERY</a></Link></li>
            <li><Link href="#"><a>TESTIMONIALS</a></Link></li>
            <li><Link href="#"><a>CONTACT US</a></Link></li>
            {/*<li><a className="py-3 px-4 rounded-full blue-2-bg text-white text-[14px]">Get Started</a></li>*/}
          </ul>

          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-grey-200 group">
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div>

              <div className="z-50 absolute top-0 -right-full h-screen w-7/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <ul className="flex flex-col items-center w-full text-base cursor-pointer  border-b">

                      <li className="py-4 px-6 w-full text-left blue-2-bg text-[14px]">
                        <div><strong>Welcome</strong></div>
                        <div><span>Login</span> | <span>Sign Up</span></div>
                      </li>

                      <li className="hover:bg-gray-200 py-4 px-6 w-full text-left"><a><i className="text-[14px] mr-2 fas fa-home"></i> Home</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full text-left"><a><i className="text-[14px] mr-2 fas fa-cog"></i> Services</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full text-left"><a><i className="text-[14px] mr-2 fas fa-info-circle"></i> About Us</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full text-left"><a><i className="text-[14px] mr-2 fas fa-image"></i> Gallery</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full text-left"><a><i className="text-[14px] mr-2 fas fa-quote-left"></i> Testimonials</a></li>
                      <li className="hover:bg-gray-200 py-4 px-6 w-full text-left"><a><i className="text-[14px] mr-2 fas fa-phone"></i> Contact Us</a></li>
                    </ul>
              </div>

          </button>
      </div>

      </nav>
  )
}

export default Header;