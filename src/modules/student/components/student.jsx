import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './dashboard';
import Grades from './Grades';
import Courses from './Courses';
import styles from '../styles/Student.module.css';

const Student = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      case 'grades':
        return <Grades />;
      case 'profile':
        return <div className={styles.contentPlaceholder}>Mi Perfil - Próximamente</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={styles.studentModule}>
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className={styles.mainContent}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Student;
