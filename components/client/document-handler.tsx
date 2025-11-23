import React from 'react'
import DownloadApplication from './download-button'
import DocumentUploader from './document-uploader'
import { FileText, Upload, ArrowRight, CheckCircle } from 'lucide-react'

const documentHandler = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden py-16'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23004aad\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-3">
            <FileText className="w-10 h-10 text-white animate-pulse" />
          </div>
          
          <h3 className='text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-800 via-blue-800 to-blue-900 bg-clip-text text-transparent mb-6 leading-tight'>
            Apply Today!
          </h3>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full animate-pulse"></div>
          </div>
          
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Please download the application form below, complete it, and upload the filled form.
            <br className="hidden sm:block" />
            <span className="text-blue-700 font-semibold">We will contact you as soon as possible.</span>
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-blue-50/80 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-100 shadow-2xl">
            
            {/* Process Steps */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Download Form</h4>
                  <p className="text-sm text-gray-600 max-w-32">Get the application form</p>
                  <div className="w-8 h-1 bg-blue-600 rounded-full mt-3"></div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block">
                  <ArrowRight className="w-6 h-6 text-blue-500 animate-pulse" />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Upload Document</h4>
                  <p className="text-sm text-gray-600 max-w-32">Submit completed form</p>
                  <div className="w-8 h-1 bg-blue-600 rounded-full mt-3"></div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block">
                  <ArrowRight className="w-6 h-6 text-blue-500 animate-pulse" />
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Get Response</h4>
                  <p className="text-sm text-gray-600 max-w-32">We&apos;ll contact you soon</p>
                  <div className="w-8 h-1 bg-green-600 rounded-full mt-3"></div>
                </div>
              </div>
            </div>

            {/* Action Buttons Container */}
            <div className="flex flex-col items-center justify-center space-y-8">
              
              {/* Download Section */}
              <div className="w-full max-w-md">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-4">
                      <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Step 1: Download Application</h4>
                      <p className="text-sm text-gray-600">Get your application form ready</p>
                    </div>
                    <DownloadApplication />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center w-full max-w-md">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <div className="px-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              </div>

              {/* Upload Section */}
              <div className="w-full max-w-md">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-4">
                      <Upload className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-gray-800 mb-2">Step 2: Upload Completed Form</h4>
                      <p className="text-sm text-gray-600">Submit your filled application</p>
                    </div>
                    <DocumentUploader />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-700/10 rounded-full border border-blue-200">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-blue-700 font-medium">Fast processing • Secure upload • Expert support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-12 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-blue-100 shadow-xl">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h4>
              <p className="text-gray-600 mb-4">
                Our support team is here to assist you throughout the application process.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default documentHandler