"use client"

import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, XIcon, ShoppingBagIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoicePrompt, setIsVoicePrompt] = useState(false);

  return (
    <div className="bg-blue-500 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <span className="text-white ml-2">My Meal</span>
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Home
          </a>
          <a
            href="/Shop"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Shop
          </a>
          <a
            href="/categories"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Restaurants
          </a>
           <a
            href="#"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            About
          </a>
        </div>
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none ml-4"
            onClick={() => setIsVoicePrompt(!isVoicePrompt)}
          >
            {isVoicePrompt ? (
              <MicrophoneIcon className="h-6 w-6" />
            ) : (
              <span role="img" aria-label="Accessibility">
                🎤
              </span>
            )}
          </button>
          <a
            href="#"
            className="text-white hover:text-gray-200 ml-4"
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } mt-4 md:hidden`}
      >
        {/* Mobile menu items */}
        <a
          href="#"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Home
        </a>
        <a
          href="#"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Shop
        </a>
        <a
          href="#"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Categories
        </a>
        <a
          href="#"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Restaurants
        </a>
        <a
          href="#"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
