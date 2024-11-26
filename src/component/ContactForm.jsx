// // import React, { useState } from 'react';
// // import SuccessToast from './SuccessToast';

// // const ContactForm = () => {
// //   const [toastVisible, setToastVisible] = useState(false);

// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault();

// //     // Simulate form submission success
// //     setTimeout(() => {
// //       setToastVisible(true);
// //       //setTimeout(() => setToastVisible(false), 3000); // Hide toast after 3 seconds
// //     }, 1000);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white relative flex items-center justify-center">
// //       <form
// //         onSubmit={handleFormSubmit}
// //         className="bg-gray-800 p-8 rounded-lg shadow-lg absolute"
// //       >
// //         <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
// //         <button
// //           type="submit"
// //           className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded"
// //         >
// //           Send Message
// //         </button>
// //       </form>

// //       <SuccessToast
// //         message="Your message has been sent successfully!"
// //         show={toastVisible}
// //         onClose={() => setToastVisible(false)}
// //       />
// //     </div>
// //   );
// // };

// // export default ContactForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import SuccessToast from './SuccessToast';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     contactNumber: '',
//     email: '',
//     location: '',
//     note: '',
//   });

//   const [status, setStatus] = useState('');
//   const [toastVisible, setToastVisible] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();   
         

//     try {
//       const response = await axios.post('http://localhost:3000/send-email', formData);
//       if (response.status === 200) {
//         setTimeout(() => {
//           setToastVisible(true);
//           setTimeout(() => setToastVisible(false), 3000); // Hide toast after 3 seconds
//         }, 1000);
//                setFormData({ name: '', contactNumber: '', email:'', location: '', note: '' });
               
//       }
//     } catch (error) {
//       setStatus('Failed to send message. Please try again.')
//     }
//   };

//   return (
//     <div className="min-h-screen   bg-black text-white relative flex  items-center justify-center">
      
//       <form
//         onSubmit={handleSubmit}
//         className="w-[35%] mx-auto bg-gray-800 p-5 mt-16 rounded-lg shadow-md absolute"
//       >

// <h2 className="text-3xl md:text-4xl font-bold text-center mb-">Contact Us</h2>
//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-1 rounded bg-gray-700 text-white border border-gray-600"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Contact Number</label>
//           <input
//             type="tel"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             required
//             className="w-full p-1 rounded bg-gray-700 text-white border border-gray-600"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-1 rounded bg-gray-700 text-white border border-gray-600"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Location</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//             className="w-full p-1 rounded bg-gray-700 text-white border border-gray-600"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-300 mb-2">Note</label>
//           <textarea
//             name="note"
//             value={formData.note}
//             onChange={handleChange}
//             required
//             rows="4"
//             className="w-full rounded bg-gray-700 text-white border border-gray-600"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-green-500 ml-[39%] hover:bg-green-400 text-white font-bold py-2 px-6 rounded"
//         >
//           Submit
//         </button>
//         {status && <p className="mt-4 text-center">{status}</p>}
//       </form>

//       <SuccessToast
//         message="Your message has been sent successfully!"
//         show={toastVisible}
//         onClose={() => setToastVisible(false)}
//       />


//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import axios from 'axios';
import SuccessToast from './SuccessToast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    location: '',
    note: '',
  });

  const [status, setStatus] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/send-email', formData);
      if (response.status === 200) {
        setTimeout(() => {
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 3000); // Hide toast after 3 seconds
        }, 1000);

        setFormData({ name: '', contactNumber: '', email: '', location: '', note: '' });
        setStatus('');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-se-xl bg-white/10 backdrop-blur-md text-white  "
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-se-xl bg-white/10 backdrop-blur-md text-white  "
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
           className="w-full p-2 rounded-se-xl bg-white/10 backdrop-blur-md text-white  "
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-se-xl bg-white/10 backdrop-blur-md text-white  "
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Note</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 rounded-se-xl bg-white/10 backdrop-blur-md text-white  "
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 w-full rounded"
        >
          Submit
        </button>
        {status && <p className="mt-4 text-center text-red-500">{status}</p>}
      </form>

      <SuccessToast
        message="Your message has been sent successfully!"
        show={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
};

export default ContactUs;
