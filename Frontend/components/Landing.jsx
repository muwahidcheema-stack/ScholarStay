import React, { useState } from 'react';
import { Eye, EyeOff, Home } from 'lucide-react';



export default function Landing() {
    const [accountType, setAccountType] = useState('user');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        oneTimeCode: ''
    });
    // Removed TypeScript type annotation for 'e'
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { accountType, ...formData });
    };

    // Removed TypeScript type annotation for 'e'
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
                <h1 className="text-gray-400 mb-6">Login Signup</h1>

                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2">
                    {/* Left Panel - Blue Section */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-white relative">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-16">
                            <div className="bg-white rounded-lg p-2">
                                <Home className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <div className="tracking-wider">SCHOLARS STAY</div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="mb-16">
                            <h2 className="text-4xl mb-6">
                                Ready to Unlock Your Next Chapter?
                            </h2>
                            <p className="text-blue-100 text-lg">
                                Connect to explore hostels, book your stay, and connect with fellow scholars across Pakistan.
                            </p>
                        </div>

                        {/* Testimonial Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                            <p className="text-sm mb-4 leading-relaxed">
                                I found a hostel just five minutes from my university through Scholars Stay. The map feature made it super easy to compare options. Saved me so much time!
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    // FIX: Using a simple image placeholder URL
                                    src="https://via.placeholder.com/40/3b82f6/ffffff?text=U"
                                    alt="Amelia"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="text-sm">Amelia</div>
                                    <div className="text-xs text-blue-200">Student</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pagination Dots */}
                        <div className="flex gap-2 justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white/30"></div>
                            <div className="w-2 h-2 rounded-full bg-white/30"></div>
                        </div>
                    </div>

                    {/* Right Panel - Form Section */}
                    <div className="p-12 bg-gray-50">
                        <div className="max-w-md">
                            <h2 className="text-gray-900 mb-2">
                                Create your account with us below
                            </h2>
                            <p className="text-gray-600 text-sm mb-8">
                                Already have an account?{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Login
                                </a>
                            </p>

                            <form onSubmit={handleSubmit}>
                                {/* Account Type Selection */}
                                <div className="mb-6">
                                    <p className="text-gray-700 text-sm mb-3">
                                        You're creating an account as?
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setAccountType('user')}
                                            className={`py-3 px-4 rounded-lg border-2 text-sm transition-all ${accountType === 'user'
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${accountType === 'user' ? 'border-blue-600' : 'border-gray-300'
                                                    }`}>
                                                    {accountType === 'user' && (
                                                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                    )}
                                                </div>
                                                User
                                            </div>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setAccountType('operator')}
                                            className={`py-3 px-4 rounded-lg border-2 text-sm transition-all ${accountType === 'operator'
                                                ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                                                }`}
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${accountType === 'operator' ? 'border-blue-600' : 'border-gray-300'
                                                    }`}>
                                                    {accountType === 'operator' && (
                                                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                    )}
                                                </div>
                                                Operator
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Full Name */}
                                <div className="mb-5">
                                    <label htmlFor="fullName" className="block text-gray-700 text-sm mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Abdul Manan"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    />
                                </div>
                                {/* Email Address */}
                                <div className="mb-5">
                                    <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-5">
                                    <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Create your password"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white pr-12"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={20} />
                                            ) : (
                                                <Eye size={20} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* One-Time Code */}
                                <div className="mb-8">
                                    <label htmlFor="oneTimeCode" className="block text-gray-700 text-sm mb-2">
                                        One-Time Code
                                    </label>
                                    <input
                                        id="oneTimeCode"
                                        name="oneTimeCode"
                                        type="text"
                                        value={formData.oneTimeCode}
                                        onChange={handleInputChange}
                                        placeholder="Enter One-Time Code"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Create Account
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
