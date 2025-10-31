'use client'

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Loader2, LogIn, Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import TopBar from './TopBar';
import { navlinks } from "@/consts";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

const Navbar = () => {
  const { getPermissions, isLoading } = useKindeBrowserClient()
  const { permissions } = getPermissions()
  const [mounted, setMounted] = useState(false)

  const isAdmin = permissions?.includes("view:dashboard")

  useEffect(() => {
    setMounted(true)
    // Calculate the height of the TopBar to position the Navbar correctly
    const topBarHeight = document.querySelector('.top-bar')?.clientHeight || 36;
    document.documentElement.style.setProperty('--top-bar-height', `${topBarHeight}px`);
  }, [])

  return (
    <>
      <TopBar />
      <header
        className="fixed left-0 right-0 z-40 bg-white shadow-sm border-b border-zinc-200"
        style={{ 
          top: 'var(--top-bar-height, 36px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image 
                  src='/agency-logo.jpg' 
                  alt='Agency logo' 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-bold text-xl text-zinc-900 tracking-tight">
                  Agency
                </span>
              </Link>
            </div>

             {/* Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex space-x-8">
              {navlinks.map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Blog' ? '/blogs' : `#${item}`}
                    className="font-semibold text-base tracking-wide text-zinc-900 transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {mounted && !isLoading && (
                <Link href="/dashboard">
                  <Button 
                    variant="default" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 h-10 rounded-lg shadow-sm"
                  >
                    {!isAdmin ? "Contact Us" : "Dashboard"}
                  </Button>
                </Link>
              )}
              
              {mounted && isLoading && (
                <Button 
                  variant="default" 
                  className="bg-blue-600 text-white font-medium px-6 h-10 rounded-lg"
                  disabled
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                </Button>
              )}
              
              <LoginLink>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-zinc-700 hover:bg-zinc-100 hover:text-blue-600 rounded-lg h-10 w-10"
                >
                  <LogIn className="h-5 w-5" />
                </Button>
              </LoginLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-700 hover:bg-zinc-100 rounded-lg"
                    aria-label="Toggle menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center gap-2 pt-2 pb-6 mb-6 border-b border-zinc-200">
                    <Image 
                      src='/agency-logo.jpg' 
                      alt='Agency logo' 
                      width={36} 
                      height={36} 
                      className="w-9 h-9 rounded-full object-cover" 
                    />
                    <span className="font-bold text-lg text-zinc-900">Agency</span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col">
                    {navlinks.map((item) => (
                      <Link
                        key={item}
                        href={item === 'Blog' ? '/blogs' : `#${item.toLowerCase()}`}
                        className="text-zinc-800 hover:text-blue-600 hover:bg-zinc-50 text-base font-medium transition-colors py-3 px-2 rounded-lg"
                      >
                        {item}
                      </Link>
                    ))}
                    
                    {/* Mobile Actions */}
                    <div className="pt-6 mt-6 space-y-3 border-t border-zinc-200">
                      {mounted && (
                        <Link href="/dashboard" className="block">
                          <Button 
                            variant="default" 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-11 rounded-lg shadow-sm"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              !isAdmin ? "Contact Us" : "Dashboard"
                            )}
                          </Button>
                        </Link>
                      )}
                      
                      <LoginLink className="block">
                        <Button 
                          variant="outline" 
                          className="w-full border-2 border-zinc-300 text-zinc-800 hover:bg-zinc-50 font-medium h-11 rounded-lg"
                        >
                          <LogIn className="mr-2 h-4 w-4" />
                          Sign In
                        </Button>
                      </LoginLink>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;