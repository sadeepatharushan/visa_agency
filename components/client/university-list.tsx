'use client';

import { universityData } from "@/consts";
import { Plus, Search, GraduationCap, MapPin, Star, ArrowRight, Globe } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';

export default function UniversityList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Filter universities based on search term
  const filteredUniversities = universityData.filter(uni =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columnCount = 3;
  const columnsData = filteredUniversities.reduce<typeof universityData[]>((acc, uni, index) => {
    const columnIndex = index % columnCount;
    if (!acc[columnIndex]) {
      acc[columnIndex] = [];
    }
    acc[columnIndex].push(uni);
    return acc;
  }, []);

  return (
    
      <div id="Universities" className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23004aad\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-3">
            <GraduationCap className="w-10 h-10 text-white animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-blue-800 to-blue-900 bg-clip-text text-transparent mb-6 leading-tight">
            Find Your Dream
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              University
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover world-class institutions and unlock your potential with our comprehensive university network
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full animate-pulse"></div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {universityData.length}+
              </div>
              <div className="text-gray-500 text-sm md:text-base">Universities</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-500 text-sm md:text-base">Countries</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-500 text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search universities by name, location, or program..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/80 backdrop-blur-md border border-blue-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg hover:bg-white/90"
              />
            </div>
          </div>
          {searchTerm && (
            <p className="text-gray-600 mt-4 text-center animate-fade-in">
              Found <span className="text-blue-600 font-semibold">{filteredUniversities.length}</span> universities matching "{searchTerm}"
            </p>
          )}
        </div>

        {/* University Grid */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-blue-50/80 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-12 border border-blue-100 shadow-2xl">
            {filteredUniversities.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No universities found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse all universities</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-x-12 gap-y-6">
                {columnsData.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-6">
                    {column.map((university, index) => (
                      <Link
                        key={university.slug}
                        href={`/universities/${university.slug}`}
                        className="group block"
                        onMouseEnter={() => setHoveredCard(university.slug)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="relative overflow-hidden">
                          {/* Card glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-2xl blur-xl transition-all duration-500 ${
                            hoveredCard === university.slug ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
                          }`}></div>
                          
                          <div className="relative bg-white/60 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 transition-all duration-500 hover:bg-white/80 hover:border-blue-200 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                                  <Plus className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                                </div>
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-2">
                                  {university.name}
                                </h3>
                                
                                <div className="flex items-center mb-3">
                                  <div className="flex space-x-1 mr-3">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500">4.8/5</span>
                                </div>
                                
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  <span>Global Campus</span>
                                </div>
                                
                                <div className="flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                                  <span>Explore Programs</span>
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                              </div>
                            </div>
                            
                            {/* Hover indicator */}
                            <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-300 ${
                              hoveredCard === university.slug ? 'scale-100 animate-pulse' : 'scale-0'
                            }`}></div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500/10 to-blue-700/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-200 shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="mb-6">
                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-spin-slow" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Ready to Start Your Journey?
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get personalized university recommendations based on your interests, budget, and career goals
              </p>
              
              <Link 
                href="/consultation"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 group"
              >
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
      </div>
  );
}