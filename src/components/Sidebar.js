import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaTasks,
  FaCalendarAlt,
  FaBell,
  FaCog,
  FaFolder
} from 'react-icons/fa';

const Sidebar = () => {
  const mainNavItems = [
    { icon: FaHome, name: 'Home', path: '/' },
    { icon: FaTasks, name: 'My Tasks', path: '/tasks' },
  ];

  const projectNavItems = [
    { name: 'Project A', path: '/projects/a' },
    { name: 'Project B', path: '/projects/b' },
  ];

  const bottomNavItems = [
    { icon: FaCalendarAlt, name: 'Calendar', path: '/calendar' },
    { icon: FaBell, name: 'Notifications', path: '/notifications' },
    { icon: FaCog, name: 'Settings', path: '/settings' },
  ];

  const getLinkClasses = (isActive) => {
    return `flex items-center px-4 py-2 text-sm rounded-lg transition-colors duration-150 ${
      isActive
        ? 'bg-deep-plum bg-opacity-10 text-deep-plum font-medium'
        : 'text-dark hover:bg-deep-plum hover:bg-opacity-5'
    }`;
  };

  return (
    <div className="w-64 bg-pure-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-deep-plum">Tasker</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-2">
        {/* Main Menu Items */}
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => getLinkClasses(isActive)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <div className="px-4 mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-dark">Projects</span>
            <FaFolder className="w-4 h-4 text-muted" />
          </div>
          <div className="space-y-1">
            {projectNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => getLinkClasses(isActive)}
              >
                <span className="w-5 h-5 mr-3 flex items-center justify-center text-xs">
                  {item.name.charAt(0)}
                </span>
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="px-3 py-4 border-t border-gray-200">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => getLinkClasses(isActive)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 