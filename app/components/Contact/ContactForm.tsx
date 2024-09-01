"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="w-full bg-white text-black rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-3 py-2 border-yellow-300 border-2 rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-3 py-2 border-yellow-300 border-2 rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full px-3 py-2 border-yellow-300 border-2 rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-3 py-2 border-yellow-300 border-2 rounded focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          placeholder="Message"
          className="w-full px-3 py-2 border-yellow-300 border-2 rounded focus:outline-none"
          rows={7}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center"
      >
        SEND REQUEST
      </button>
    </form>
  );
};

export default ContactForm;
