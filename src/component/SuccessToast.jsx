import React from 'react';

const SuccessToast = ({show, onClose }) => {
  if (!show) return null;

  return (
    <div className="bg-green-300 h-auto p-4  w-[50%] z-10
     flex flex-col items-center justify-center realative rounded-lg shadow-lg  animate-fadein">
        <div className="flex items-center justify-center mb-4">
          <svg
            className="w-12 h-12 text-white-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

      <div className="bg-white/35 rounded-lg shadow-lg p-8 w-[60%] backdrop-blur-xl text-center justify-center">
      
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Success!<br/> our Team Will Connect You .
        </h2>
        <p className="text-gray-600 mb-6">
        Thank you for reaching out! ✨ Your message has been received successfully. Our team will get back to you shortly. Have a great day!
        </p>
        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-500' / >
        <button onClick={onClose} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Continue
        </button>
      </div>

      
    </div>






  );
};

export default SuccessToast;



