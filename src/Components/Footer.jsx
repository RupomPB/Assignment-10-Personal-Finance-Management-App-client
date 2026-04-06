import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-200 border-t border-base-300">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="footer sm:footer-horizontal text-base-content grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <aside className="flex flex-col gap-4 max-w-sm">
                        <p className="font-black text-3xl tracking-tighter">
                            Fin <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Ease</span>
                        </p>
                        <p className="text-base-content/70 leading-relaxed text-sm">
                            Your trusted partner in personal finance management. 
                            Take control of your financial future with our next-gen tools and insights.
                        </p>
                        {/* Social Icons moved here for better balance */}
                        <div className="flex items-center gap-5 mt-2">
                            <Link to="https://www.facebook.com/rupomPB" className="hover:text-primary transition-colors duration-300">
                                <FaFacebook size={22} />
                            </Link>
                            <Link to="https://www.linkedin.com/in/rupom-pb/" className="hover:text-primary transition-colors duration-300">
                                <FaLinkedin size={22} />
                            </Link>
                            <Link to="https://github.com/RupomPB/" className="hover:text-primary transition-colors duration-300">
                                <FaGithub size={22} />
                            </Link>
                        </div>
                    </aside>

                    {/* Quick Links */}
                    <nav>
                        <h6 className="footer-title opacity-100 font-bold text-base-content mb-4 uppercase tracking-widest text-xs">Services</h6>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Wealth Tracking</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Budgeting Tools</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Financial Analysis</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Cloud Sync</a>
                    </nav>

                    <nav>
                        <h6 className="footer-title opacity-100 font-bold text-base-content mb-4 uppercase tracking-widest text-xs">Company</h6>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">About us</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Contact</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Careers</a>
                        <a className="link link-hover text-base-content/70 hover:text-primary transition-colors">Blog</a>
                    </nav>

                    {/* Newsletter Section - Adds high-end professional feel */}
                    <div className="flex flex-col gap-4">
                        <h6 className="footer-title opacity-100 font-bold text-base-content mb-4 uppercase tracking-widest text-xs">Stay Updated</h6>
                        <p className="text-sm text-base-content/70">Subscribe for financial tips and updates.</p>
                        <div className="flex flex-col gap-2">
                            <div className="join w-full max-w-sm">
                                <input 
                                    type="text" 
                                    placeholder="email@example.com" 
                                    className="input input-bordered join-item w-full focus:outline-primary transition-all text-sm" 
                                />
                                <button className="btn btn-primary join-item px-6 font-bold">Join</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-base-content/50 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} FinEase. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a className="hover:text-primary transition-colors cursor-pointer">Privacy</a>
                        <a className="hover:text-primary transition-colors cursor-pointer">Terms</a>
                        <a className="hover:text-primary transition-colors cursor-pointer">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;