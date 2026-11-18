
import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (email && password) {
      alert('تم تسجيل الدخول بنجاح!');
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-10 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl w-full max-w-md border border-gray-100">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in to your LUGX account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`w-full px-4 py-3 text-center border rounded-xl focus:outline-none transition-all duration-200 ${
                submitted && !email
                  ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-200 focus:border-[#0071f8] focus:ring-2 focus:ring-blue-100'
              }`}
            />

            {submitted && !email && (
              <span className="text-red-500 text-xs mt-1 block text-center font-medium animate-pulse">
                * البريد الإلكتروني مطلوب
              </span>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-3 text-center border rounded-xl focus:outline-none transition-all duration-200 ${
                submitted && !password
                  ? 'border-red-500 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-200 focus:border-[#0071f8] focus:ring-2 focus:ring-blue-100'
              }`}
            />

            {submitted && !password && (
              <span className="text-red-500 text-xs mt-1 block text-center font-medium animate-pulse">
                * كلمة المرور مطلوبة
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0071f8] hover:bg-blue-600 text-white py-3 rounded-xl font-medium tracking-wide shadow-lg shadow-blue-500/25 transition-all duration-300 transform active:scale-[0.98]"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default SignIn;
