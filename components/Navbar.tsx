'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/About' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1464D8]/95 backdrop-blur-xl shadow-xl'
          : 'bg-[#1464D8]'
      }`}
    >
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08),transparent,rgba(255,255,255,0.05))] pointer-events-none" />

      <nav className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-lg md:text-2xl font-light tracking-tight text-white uppercase leading-none">
              All About Drivers
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-[15px] font-medium tracking-wide transition-all duration-300 ${
                  item.label === 'HOME'
                    ? 'text-white'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Explore Button */}
            <button className="bg-white text-[#1464D8] rounded-full px-7 py-2.5 text-[15px] font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg">
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <div className="bg-[#1464D8] border-t border-white/10 px-6 py-5 space-y-5 shadow-2xl">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-[15px] font-medium text-white/80 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Button */}
          <button className="w-full bg-white text-[#1464D8] rounded-full py-3 text-sm font-semibold hover:bg-slate-100 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}