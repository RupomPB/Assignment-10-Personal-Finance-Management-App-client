import React from 'react';
import { FaBehanceSquare } from 'react-icons/fa';
import { FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
       <footer className="bg-base-200 ">
      <div className="max-w-7xl mx-auto footer sm:footer-horizontal  text-base-content p-10 ">
        <aside className=' flex flex-col items-center text-center'>
        <p className=' font-bold text-xl'>Fin <span className='bg-linear-to-r from-[#db28eb] to-[#e84646] text-transparent bg-clip-text '>Ease</span></p>
          <p>
           Your trusted partner in <br></br>personal finance management. <br></br> Take control of your financial future today.
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

          	{/* Social Icons */}
					<div className="flex items-center gap-4 mt-4 text-lg">
						<Link
							to="https://www.facebook.com/"
							className="hover:text-blue-500"
						>
							<FaFacebook className="text-[24px]" />
						</Link>
						<Link
							to="https://www.linkedin.com/login"
							className="hover:text-blue-500"
						>
							<FaLinkedin className="text-[24px]" />
						</Link>
						<Link
							to="https://www.behance.net/"
							className="hover:text-blue-500"
						>
							<FaBehanceSquare className="text-[24px]" />
						</Link>
					</div>
        </nav>
      </div>
    </footer>
    );
};

export default Footer;