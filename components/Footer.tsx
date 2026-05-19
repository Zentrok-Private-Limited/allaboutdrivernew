import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-[#1464D8]/95 text-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">All About Driver</h3>
            <p className="text-sm text-slate-200 font-light leading-relaxed">
              All About Driver is an informational website dedicated to helping users understand drivers, updates, compatibility, and common device-related topics through simple, clear, and educational content.
            </p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/About" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/Blogs" className="hover:text-white transition-colors">Latest Blogs</a></li>
              <li><a href="/ContactUs" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/FAQ" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Policies</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <p className="text-sm font-light">Address : lorem ipsum dolor sit amet</p>
            <p className="text-sm font-light text-white">info@allaboutdriver</p>
            <a href="/ContactUs" className="mt-2 px-6 py-2 rounded-full border border-slate-200 text-white text-xs font-medium hover:bg-white hover:text-[#1464D8] transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-100/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light">
          <div>© {new Date().getFullYear()} ALL ABOUT DRIVER. ALL RIGHTS RESERVED.</div>
          <div className="tracking-wide text-center md:text-right text-slate-100">
            DISCLAIMER – FOR INFORMATIONAL ONLY. NO SOFTWARE INSTALLATION OR DISTRIBUTION.
          </div>
        </div>
    </footer>
  )
}

export default Footer