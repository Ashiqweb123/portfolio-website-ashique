import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon, WhatsAppIcon, DownloadIcon, ArrowForwardIcon } from './Icons';

const IconTest = () => {
  return (
    <div className="p-8 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Icon Test</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-4 border rounded">
          <GitHubIcon className="w-8 h-8 text-gray-700 dark:text-gray-300 mb-2" />
          <span className="text-sm">GitHub</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded">
          <LinkedInIcon className="w-8 h-8 text-blue-600 mb-2" />
          <span className="text-sm">LinkedIn</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded">
          <EmailIcon className="w-8 h-8 text-red-600 mb-2" />
          <span className="text-sm">Email</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded">
          <PhoneIcon className="w-8 h-8 text-green-600 mb-2" />
          <span className="text-sm">Phone</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded">
          <WhatsAppIcon className="w-8 h-8 text-green-500 mb-2" />
          <span className="text-sm">WhatsApp</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded">
          <DownloadIcon className="w-8 h-8 text-purple-600 mb-2" />
          <span className="text-sm">Download</span>
        </div>
        <div className="flex flex-col items-center p-4 border rounded">
          <ArrowForwardIcon className="w-8 h-8 text-gray-600 mb-2" />
          <span className="text-sm">Arrow</span>
        </div>
      </div>
    </div>
  );
};

export default IconTest;