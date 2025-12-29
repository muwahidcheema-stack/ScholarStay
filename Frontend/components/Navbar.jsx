import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react'; // Home for the logo icon

// Placeholder for the logo image. You should replace this path
// with the actual path to your Scholars Stay logo image file.
const logoImage = 'https://via.placeholder.com/40x50/ffffff?text=LOGO';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        // Main Container with a light gray background matching the image
        <nav className="w-full bg-gray-200/90 py-4 shadow-md backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section (Left Side) */}
                    <a href="#" className="flex items-center space-x-3">
                        <div className="flex items-center">
                            {/* Icon / Image Placeholder for the logo */}
                            <img src={logoImage} alt="Scholars Stay Logo" className="h-10 w-auto object-contain" />

                            {/* Text Logo */}
                            <div className="ml-2">
                                <div className="text-gray-900 text-base font-bold tracking-widest leading-none">
                                    SCHOLARS STAY
                                </div>
                                <div className="text-blue-600 text-xs leading-none">
                                    Home away from home
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Desktop Navigation Links (Center) */}
                    <div className="hidden md:flex md:space-x-12 items-center">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                // Styling links to match the large, blue text in the image
                                className="text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Button Section (Right Side) */}
                    <div className="hidden md:flex items-center">
                        <button
                            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-lg 
                         hover:bg-blue-700 transition-colors whitespace-nowrap"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md 
                         text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium 
                           text-blue-600 hover:bg-gray-300 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <button
                                className="w-full bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-lg 
                           hover:bg-blue-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}