'use client'

import { Clock, Phone } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="w-full bg-[#002244] text-white py-2 fixed top-0 left-0 right-0 z-50 top-bar">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <Clock className="h-4 w-4 mr-2" />
            <span>Monday - Saturday, 8AM to 10PM</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+15589554885" className="hover:underline">
              Call us now +1 5589 55488 55
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar