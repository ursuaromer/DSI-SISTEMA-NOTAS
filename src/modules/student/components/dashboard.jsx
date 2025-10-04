import React from 'react';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const statsData = [
    { icon: '📄', value: '1', label: 'Materias' },
    { icon: '✅', value: '1', label: 'Notas' },
    { icon: '📊', value: '15.0', label: 'Promedio' },
    { icon: '🏆', value: '1', label: 'Aprobadas' }
  ];

  const quickActions = [
    {
      icon: '📄',
      title: 'Mis Cursos',
      description: 'Ver todas tus materias'
    },
    {
      icon: '✅',
      title: 'Mis Calificaciones',
      description: 'Revisar tus notas'
    }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <h1>¡Bienvenido, jennevy!</h1>
        <p>Aquí tienes un resumen de tu progreso académico</p>
      </div>

      <div className={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.quickActionsSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>⚡</span>
          Acciones Rápidas
        </h2>
        <div className={styles.quickActionsGrid}>
          {quickActions.map((action, index) => (
            <div key={index} className={styles.actionCard}>
              <div className={styles.actionIcon}>{action.icon}</div>
              <div className={styles.actionContent}>
                <h3 className={styles.actionTitle}>{action.title}</h3>
                <p className={styles.actionDescription}>{action.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.recentActivitySection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🕐</span>
          Actividad Reciente
        </h2>
        <div className={styles.activityContent}>
          <p className={styles.noActivity}>No hay actividad reciente</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
