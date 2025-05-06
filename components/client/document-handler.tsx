import React from 'react'
import DownloadApplication from './download-button'
import DocumentUploader from './document-uploader'

const documentHandler = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
        <h3 className='text-3xl font-bold sm:text-4xl'>Apply Today!</h3>
        <p className='text-center'>Please download the application form below, complete it, and upload the filled form.<br/> We will contact you as soon as possible.</p>
        <div className="flex flex-col items-center justify-center space-y-4">
        <DownloadApplication />
        <DocumentUploader  />
        </div>
    </div>
    
  )
}

export default documentHandler