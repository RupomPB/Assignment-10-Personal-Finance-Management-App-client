import React from 'react';

const Footer = () => {
    return (
       <footer className="bg-base-200 ">
      <div className="max-w-7xl mx-auto footer sm:footer-horizontal  text-base-content p-10 ">
        <aside className=' flex flex-col items-center'>
        <p className=' font-bold text-xl'>Fin <span className='bg-linear-to-r from-[#db28eb] to-[#e84646] text-transparent bg-clip-text '>Ease</span></p>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
    );
};

export default Footer;