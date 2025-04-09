import React from 'react';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomePage = () => {
  const upcomingTasks = [
    { name: 'Design homepage', dueDate: 'Today' },
    { name: 'Prepare presentation', dueDate: 'Apr 26' },
    { name: 'Write documentation', dueDate: 'Apr 26' },
  ];

  const recentActivity = [
    { text: 'You created a task', subtext: 'Fix login issue', time: '1 hour ago' },
    { text: 'Research competitors', subtext: 'marked complete', time: '8 hours ago' },
    { text: 'Task "Update dependencies"', subtext: 'was updated', time: '1 day ago' },
    { text: 'John assigned you a task', subtext: 'Implement feature', time: '2 days ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-dark">Overview</h1>
        <button className="bg-deep-plum text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90">
          <FaPlus className="w-4 h-4" />
          <span>New Task</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overview Section */}
        <div className="bg-pure-white rounded-lg shadow-card p-6">
          <h2 className="text-lg font-semibold text-dark mb-4">Upcoming Tasks</h2>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-dark">{task.name}</span>
                <span className="text-muted text-sm">{task.dueDate}</span>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-dark mt-8 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-muted mt-2"></div>
                <div>
                  <div className="text-dark">{activity.text}</div>
                  <div className="text-sm text-muted">{activity.subtext}</div>
                  <div className="text-xs text-muted mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-pure-white rounded-lg shadow-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-dark">Calendar</h2>
            <div className="flex space-x-2">
              <button className="p-1 hover:bg-soft-warm-gray rounded">
                <FaChevronLeft className="w-4 h-4 text-muted" />
              </button>
              <span className="text-dark">April 2024</span>
              <button className="p-1 hover:bg-soft-warm-gray rounded">
                <FaChevronRight className="w-4 h-4 text-muted" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="text-center text-sm text-muted py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <button
                key={i}
                className={`text-center py-2 text-sm rounded-lg hover:bg-soft-warm-gray
                  ${i + 1 === 18 ? 'bg-deep-plum text-pure-white' : 'text-dark'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 