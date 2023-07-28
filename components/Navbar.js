"use client"

import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoicePrompt, setIsVoicePrompt] = useState(false);

  return (
    <nav className="bg-blue-500 py-4 px-6 flex items-center justify-between">
      <div>
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
        <span className="text-white ml-2">Menu</span>
      </div>
      <div>
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
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } mt-4 md:flex md:items-center md:mt-0`}
      >
        <a
          href="#"
          className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
        >
          Home
        </a>
        <a
          href="#"
          className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
        >
          About
        </a>
        <a
          href="#"
          className="block mt-4 md:inline-block md:mt-0 text-white mr-6"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
