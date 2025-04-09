import React from 'react';
import { FaSearch, FaQuestionCircle, FaBell, FaUserCircle } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-pure-white border-b border-gray-200 h-16 flex items-center px-6 justify-between">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-muted" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-deep-plum"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-muted hover:text-dark">
          <FaQuestionCircle className="w-5 h-5" />
        </button>
        <button className="text-muted hover:text-dark">
          <FaBell className="w-5 h-5" />
        </button>
        <button className="flex items-center text-muted hover:text-dark">
          <FaUserCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default TopBar; 