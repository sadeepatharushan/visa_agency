/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { FileText, CheckCircle, X } from 'lucide-react';
import { UploadButton } from '@/lib/uploadthing';
import Swal from 'sweetalert2';

export default function DocumentUploader() {
  const [uploadedFile, setUploadedFile] = useState(null);

  // Function to format file size
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const handleClientUploadComplete = (res) => {
    // Set the uploaded file
    if (res && res[0]) {
      setUploadedFile(res[0]);
      console.log("Upload complete:", res[0]);
      
      // Professional Success Alert
      Swal.fire({
        icon: 'success',
        title: 'Document Uploaded Successfully',
        html: `
          <p style="color: #4B5563; font-size: 15px; line-height: 1.6; margin-top: 10px;">
            Your document has been securely uploaded to our system. 
            One of our team members will review your submission and contact you shortly.
          </p>
          <p style="color: #6B7280; font-size: 13px; margin-top: 15px;">
            Thank you for your patience.
          </p>
        `,
        confirmButtonText: 'Got it',
        confirmButtonColor: '#2563EB',
        customClass: {
          popup: 'rounded-lg',
          title: 'text-xl font-semibold',
          confirmButton: 'px-6 py-2.5 rounded-lg font-medium'
        }
      });
    }
  };

 const handleUploadError = (error) => {
  // Handle any upload errors
  console.error("Error uploading document:", error);

  // Professional Error Alert
  Swal.fire({
    icon: 'error',
    title: 'Upload Failed',
    html: `
      <p style="color: #4B5563; font-size: 15px; line-height: 1.6; margin-top: 10px;">
        We encountered an issue while uploading your document. Please try again.
      </p>
      <div style="background-color: #FEF2F2; border-left: 3px solid #EF4444; padding: 12px; margin-top: 15px; border-radius: 4px;">
        <p style="color: #991B1B; font-size: 13px; margin: 0;">
          <strong>Error:</strong> ${error.message}
        </p>
      </div>
      <p style="color: #6B7280; font-size: 14px; margin-top: 15px; line-height: 1.5;">
        If the problem persists, please contact our support team:
      </p>
      <div style="margin-top: 10px;">
        <p style="color: #2563EB; font-size: 14px; margin: 5px 0;">
          📧 Email: support@example.com
        </p>
        <p style="color: #2563EB; font-size: 14px; margin: 5px 0;">
          📞 Phone: +1 (800) 123-4567
        </p>
      </div>
    `,
    confirmButtonText: 'Try Again',
    confirmButtonColor: '#2563EB',
    showCancelButton: true,
    cancelButtonText: 'Contact Support',
    cancelButtonColor: '#6B7280',
    customClass: {
      popup: 'rounded-lg',
      title: 'text-xl font-semibold',
      confirmButton: 'px-6 py-2.5 rounded-lg font-medium',
      cancelButton: 'px-6 py-2.5 rounded-lg font-medium'
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      // Open email client
      window.location.href = "mailto:support@example.com?subject=Document Upload Issue";
    }
  });
};

  const clearUploadedFile = () => {
    setUploadedFile(null);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        {!uploadedFile ? (
          <div className="flex justify-center">
            <UploadButton
              endpoint="documentUploader"
              onClientUploadComplete={handleClientUploadComplete}
              onUploadError={handleUploadError}
              // appearance={{
              //   button: "bg-blue-600 hover:bg-blue-700 text-white ut-uploading:bg-blue-400",
              //   allowedContent: "text-xs text-gray-500",
              // }}
            />
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{uploadedFile.name}</h3>
                  <p className="text-xs text-gray-500">{formatFileSize(uploadedFile.size)}</p>
                </div>
              </div>
                            
              <div className="flex items-center space-x-2">
                {/* <a
                  href={uploadedFile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium ml-2"
                >
                  View
                </a> */}
                                
                <button
                  onClick={clearUploadedFile}
                  className="p-1 rounded-full hover:bg-gray-200 ml-3"
                  title="Remove file"
                >
                  <X className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
                        
            <div className="mt-2 flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-xs text-green-600">Upload complete</span>
            </div>
          </div>
        )}
                
        {uploadedFile && (
          <div className="flex justify-center">
            <UploadButton
              endpoint="documentUploader"
              onClientUploadComplete={handleClientUploadComplete}
              onUploadError={handleUploadError}
              // appearance={{
              //   button: "bg-gray-200 hover:bg-gray-300 text-gray-700",
              //   allowedContent: "text-xs text-gray-500",
              // }}
              // content={{
              //   button({ isUploading }) {
              //     return isUploading ? "Uploading..." : "Upload Another Document";
              //   }
              // }}
            />
          </div>
        )}
      </div>
    </div>
  );
}