import React from 'react';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      {/* Placeholder Content - Replace with React Router later */}
      <h1 className="text-2xl font-bold text-dark-espresso">Welcome to Tasker!</h1>
      <p className="text-muted-taupe mt-2">Select a section from the sidebar to get started.</p>
      {/* Example Accent Usage */}
      <div className="mt-4 p-4 border border-olive-green rounded bg-pure-white">
        <h2 className="text-lg font-semibold text-olive-green">Upcoming Tasks</h2>
        {/* Task list would go here */}
         <button className="mt-2 px-4 py-2 bg-burnt-orange text-pure-white rounded hover:opacity-90">Add Task</button>
         <button className="ml-2 mt-2 px-4 py-2 bg-crimson-red text-pure-white rounded hover:opacity-90">Delete Task</button>
      </div>
    </Layout>
  );
}

export default App;
