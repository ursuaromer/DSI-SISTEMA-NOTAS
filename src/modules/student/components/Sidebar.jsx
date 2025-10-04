import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🌐' },
    { id: 'courses', label: 'Mis Cursos', icon: '📄' },
    { id: 'grades', label: 'Mis Calificaciones', icon: '✅' },
    { id: 'profile', label: 'Mi Perfil', icon: '👤' }
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>Sistema de Notas</h2>
      </div>
      
      <div className={styles.userInfo}>
        <h3>jennevy lomas</h3>
        <span className={styles.userRole}>Estudiante</span>
      </div>

      <nav className={styles.sidebarNav}>
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
            onClick={() => onSectionChange(item.id)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.sidebarFooter}>
        <button className={styles.logoutBtn}>
          <span className={styles.logoutIcon}>→</span>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
