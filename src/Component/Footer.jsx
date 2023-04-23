import React from 'react';

const Footer = () => {
    return (
<div className='mt-12'>
<footer className="bg-slate-100 text-gray-700 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">My Bookstore</h2>
              <p className="text-gray-400">123 Main St, Anytown USA</p>
              <p className="text-gray-400">(123) 456-7890</p>
              <a href="#" className="text-gray-400 hover:text-white">support@mybookstore.com</a>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Links</h2>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Newsletter</h2>
              <p className="text-gray-400 mb-4">Sign up for our newsletter to receive updates on new releases and special offers.</p>
              <form className="flex flex-wrap" action="#" method="POST">
                <input type="email" placeholder="Your email address" className="w-full md:w-3/4 py-2 px-4 mb-2 md:mb-0" required/>
                <button type="submit" className="w-full md:w-1/4 py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200">Subscribe</button>
              </form>
            </div>
          
          </div>
          <div className='text-center py-6'>
           <p className="text-sm text-center">&copy; My Bookstore 2023. All rights reserved.</p>
           </div>
        </div>
       
      </footer>
</div>
      
    );
};

export default Footer;