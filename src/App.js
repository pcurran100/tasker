import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MyTasksPage from './pages/MyTasksPage';
import CalendarPage from './pages/CalendarPage';
import InboxPage from './pages/InboxPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<MyTasksPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/notifications" element={<InboxPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/projects/*" element={<div>Projects Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
