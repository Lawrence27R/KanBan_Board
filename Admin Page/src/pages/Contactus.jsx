import React, { useState } from 'react';

const ContactUs = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to send message to website owner
    // console.log(`User: ${userName}, Email: ${email}, Message: ${message}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-700">Contact Us</h1>
      <div className="w-full md:w-2/3 lg:w-1/2 px-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name:
              <input
                type="text"
                id="name"
                className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
              <input
                type="email"
                id="email"
                className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message:
              <textarea
                id="message"
                className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send
          </button>
        </form>
      </div>
      <div className="mt-8">
        <p className="text-gray-600">Website Owner:</p>
        <p className="text-gray-700 font-bold">Lawrence Rodriques</p>
        <p className="text-gray-600">Email:</p>
        <p className="text-gray-700 font-bold">rodriques22062002@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
