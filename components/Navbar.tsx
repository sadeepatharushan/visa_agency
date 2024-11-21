'use client'

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { getPermissions } = useKindeBrowserClient()
  const { permissions } = getPermissions()

  const isAdmin = permissions?.includes("view:dashboard")
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to check scroll position and update the header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={` fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 flex-1">
            <Link href="/" className="text-white font-bold text-xl">
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Services', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`/`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sign Up Button and Avatar */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {isAdmin ? (<Link href="/dashboard">
              <Button variant="secondary" className="bg-gray-800 hover:bg-gray-900 text-white">
                Dashboard
              </Button>
            </Link>) : (
            <Link href="/dashboard">
              <Button variant="secondary" className="bg-gray-800 hover:bg-gray-900 text-white">
                Contact
              </Button>
            </Link>)}
            
            <Separator orientation="vertical" className='h-8 bg-gray-800' />
            <LoginLink>
              <Button variant="secondary" className="bg-gray-800 hover:bg-gray-900 text-white">
              <LogIn />
              </Button>
              </LoginLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;