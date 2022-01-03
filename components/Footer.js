const Footer = (props) => {
  return (
   <footer className="grey-3-bg py-5">

    <div className="container mx-auto">
      
          <div className="text-center">
              <span className="mx-2"><a href="#">Home</a></span> | 
              <span className="mx-2"><a href="#">Services</a></span> | 
              <span className="mx-2"><a href="#">About Us</a></span> | 
              <span className="mx-2"><a href="#">Gallery</a></span> | 
              <span className="mx-2"><a href="#">Testimonials</a></span> | 
              <span className="mx-2"><a href="#">Contact Us</a></span>
          </div>

          <div className="flex justify-center my-4">
              <button className="rounded-full h-10 w-10 bg-black text-white mx-1"><i className="fab fa-facebook-f"></i></button>
              <button className="rounded-full h-10 w-10 bg-black text-white mx-1"><i className="fab fa-twitter"></i></button>
              <button className="rounded-full h-10 w-10 bg-black text-white mx-1"><i className="fab fa-instagram"></i></button>
              <button className="rounded-full h-10 w-10 bg-black text-white mx-1"><i className="fab fa-linkedin"></i></button>
          </div>
        </div>

          <hr className="w-full" />

          <div className="md:flex justify-center my-4">
              <div className="text-[13px] text-center">&copy; 2021 Vince Technologies | Powered by Vince Technologies</div>
          </div>
    
  </footer>
  )
}

export default Footer;