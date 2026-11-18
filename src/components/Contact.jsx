
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (formData.name && formData.email && formData.message) {
      alert('تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.');
    }
  };

  return (
    <div className="pb-12 sm:pb-16 lg:pb-20">

      {/* Top Banner */}
      <div className="bg-[#0071f8] pt-32 sm:pt-40 lg:pt-50 pb-20 sm:pb-24 lg:pb-30 px-4 sm:px-5 text-center rounded-b-[50px] sm:rounded-b-[75px] lg:rounded-b-[100px] mb-12 sm:mb-16 lg:mb-24">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 uppercase">
          Contact Us
        </h1>

        <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium">
          <Link to="/" className="hover:underline">Home</Link> &gt; Contact Us
        </p>

      </div>

      {/* Main Content */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-5">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">

          {/* Contact Information */}
          <div className="lg:col-span-6 bg-[#f7f7f7] rounded-[25px] sm:rounded-[30px] p-6 sm:p-9 md:p-12 lg:p-14 text-center">

            <span className="text-[#ee626b] font-bold text-xs uppercase tracking-wider block mb-3">
              CONTACT US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 sm:mb-8">
              Say Hello!
            </h2>

            <p className="text-gray-500 text-sm leading-7 mb-7 sm:mb-10">
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.
            </p>

            <ul className="space-y-5 sm:space-y-6">

              <li>
                <span className="block font-bold text-gray-900 text-sm mb-1">
                  Address
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  Sunny Isles Beach, FL 33160, United States
                </span>
              </li>

              <li>
                <span className="block font-bold text-gray-900 text-sm mb-1">
                  Phone
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  +123 456 7890
                </span>
              </li>

              <li>
                <span className="block font-bold text-gray-900 text-sm mb-1">
                  Email
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  lugx@contact.com
                </span>
              </li>

            </ul>

          </div>

          {/* Map and Form */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-10">

            {/* Map */}
            <div className="rounded-[25px] sm:rounded-[30px] overflow-hidden h-[230px] sm:h-[280px] md:h-[320px] shadow-xs w-full">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.046907471015!2d-80.12285142456488!3d25.958169902641885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d133f990526715%3A0xe5e155c8da9a7b93!2sSunny%20Isles%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 text-center"
              noValidate
            >

              {/* Name and Surname */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div>
                  <input
                    type="text"
                    placeholder="Your Name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full h-12 px-5 bg-[#f7f7f7] rounded-full border text-sm text-gray-700 placeholder-gray-400 text-center focus:outline-none transition ${
                      submitted && !formData.name
                        ? 'border-red-500'
                        : 'border-gray-200 focus:border-[#0071f8]'
                    }`}
                  />

                  {submitted && !formData.name && (
                    <span className="text-red-500 text-xs mt-1 block">
                      * الاسم مطلوب
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Your Surname..."
                    value={formData.surname}
                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                    className="w-full h-12 px-5 bg-[#f7f7f7] rounded-full border border-gray-200 text-sm text-gray-700 placeholder-gray-400 text-center focus:outline-none focus:border-[#0071f8] transition"
                  />
                </div>

              </div>

              {/* Email and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

                <div>
                  <input
                    type="email"
                    placeholder="Your E-mail..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full h-12 px-5 bg-[#f7f7f7] rounded-full border text-sm text-gray-700 placeholder-gray-400 text-center focus:outline-none transition ${
                      submitted && !formData.email
                        ? 'border-red-500'
                        : 'border-gray-200 focus:border-[#0071f8]'
                    }`}
                  />

                  {submitted && !formData.email && (
                    <span className="text-red-500 text-xs mt-1 block">
                      * البريد الإلكتروني مطلوب
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-12 px-5 bg-[#f7f7f7] rounded-full border border-gray-200 text-sm text-gray-700 placeholder-gray-400 text-center focus:outline-none focus:border-[#0071f8] transition"
                  />
                </div>

              </div>

              {/* Message */}
              <div>

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-5 bg-[#f7f7f7] rounded-[25px] border text-sm text-gray-700 placeholder-gray-400 text-center focus:outline-none transition resize-y ${
                    submitted && !formData.message
                      ? 'border-red-500'
                      : 'border-gray-200 focus:border-[#0071f8]'
                  }`}
                ></textarea>

                {submitted && !formData.message && (
                  <span className="text-red-500 text-xs mt-1 block">
                    * الرسالة مطلوبة
                  </span>
                )}

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#ee626b] hover:bg-[#0071f8] text-white px-7 sm:px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors duration-300 cursor-pointer mx-auto"
              >
                SEND MESSAGE NOW
              </button>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
