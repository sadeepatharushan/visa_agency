/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { FileText, CheckCircle, X } from 'lucide-react';
import { UploadButton } from '@/lib/uploadthing';
import { toast } from 'sonner';

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
      
      // Show a lightweight toast on success (using sonner)
      toast.success(
        <div>
          <p style={{ color: '#4B5563', fontSize: 15, lineHeight: 1.6, marginTop: 10 }}>
            Your document has been securely uploaded to our system. One of our team members will review your submission and contact you shortly.
          </p>
          <p style={{ color: '#6B7280', fontSize: 13, marginTop: 15 }}>
            Thank you for your patience.
          </p>
        </div>,
        { duration: 6000 }
      );
    }
  };

 const handleUploadError = (error) => {
  // Handle any upload errors
  console.error("Error uploading document:", error);

  // Show a toast error with details and a quick action to try again or contact support
  toast.error(
    <div>
      <p style={{ color: '#4B5563', fontSize: 15, lineHeight: 1.6, marginTop: 10 }}>
        We encountered an issue while uploading your document. Please try again.
      </p>
      <div style={{ backgroundColor: '#FEF2F2', borderLeft: '3px solid #EF4444', padding: 12, marginTop: 15, borderRadius: 4 }}>
        <p style={{ color: '#991B1B', fontSize: 13, margin: 0 }}>
          <strong>Error:</strong> {error?.message}
        </p>
      </div>
      <p style={{ color: '#6B7280', fontSize: 14, marginTop: 15, lineHeight: 1.5 }}>
        If the problem persists, please contact our support team:
      </p>
      <div style={{ marginTop: 10 }}>
        <a href="mailto:support@example.com?subject=Document Upload Issue" style={{ color: '#2563EB', fontSize: 14, display: 'block', margin: '5px 0' }}>
          📧 Email: support@example.com
        </a>
        <p style={{ color: '#2563EB', fontSize: 14, margin: '5px 0' }}>
          📞 Phone: +1 (800) 123-4567
        </p>
      </div>
    </div>,
    {
      action: {
        label: 'Try Again',
        onClick: () => {
          // clear the file so the user can upload again
          clearUploadedFile();
        }
      },
      duration: 8000
    }
  );
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