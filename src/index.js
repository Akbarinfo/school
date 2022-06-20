import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StudentsProvider } from './components/store/Students';
import { TeacherProvider } from './components/store/Teacher';
import './style/app.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <StudentsProvider>
    <TeacherProvider>
      <App />
    </TeacherProvider>
  </StudentsProvider>

  </BrowserRouter>
);
