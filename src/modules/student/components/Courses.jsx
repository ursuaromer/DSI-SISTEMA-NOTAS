import React from 'react';
import styles from '../styles/Courses.module.css';

const Courses = () => {
  // Datos de ejemplo basados en la imagen
  const courseData = {
    name: 'ingles',
    code: 'IN15',
    teacher: 'jose diaz',
    email: 'aisnd156@gmail.com',
    totalGrades: 1,
    average: '15.0',
    lastGrade: '15.0',
    lastEvaluation: 'Trabajo Práctico',
    date: '03/10/2025',
    observations: 'bueno',
    status: 'Aprobado'
  };

  return (
    <div className={styles.coursesContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mis Cursos</h1>
        <p className={styles.subtitle}>Tus materias y su progreso académico</p>
      </div>

      <div className={styles.courseCard}>
        <div className={styles.courseHeader}>
          <div className={styles.courseTitleSection}>
            <span className={styles.courseIcon}>📄</span>
            <span className={styles.courseName}>{courseData.name}</span>
          </div>
          <div className={styles.courseCode}>{courseData.code}</div>
        </div>

        <div className={styles.courseContent}>
          <div className={styles.teacherInfo}>
            <div className={styles.teacherName}>
              <span className={styles.label}>Docente:</span> {courseData.teacher}
            </div>
            <div className={styles.teacherEmail}>
              <span className={styles.label}>Email:</span> {courseData.email}
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.statValue}>{courseData.totalGrades}</div>
              <div className={styles.statLabel}>Total Notas</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statValue}>{courseData.average}</div>
              <div className={styles.statLabel}>Promedio</div>
            </div>
            <div className={styles.statBox}>
              <div className={styles.statValue}>{courseData.lastGrade}</div>
              <div className={styles.statLabel}>Última Nota</div>
            </div>
          </div>

          <div className={styles.lastEvaluation}>
            <div className={styles.evaluationItem}>
              <span className={styles.label}>Última Evaluación:</span> {courseData.lastEvaluation}
            </div>
            <div className={styles.evaluationItem}>
              <span className={styles.label}>Fecha:</span> {courseData.date}
            </div>
            <div className={styles.evaluationItem}>
              <span className={styles.label}>Observaciones:</span> {courseData.observations}
            </div>
          </div>

          <div className={styles.statusSection}>
            <div className={styles.statusBadge}>
              <span className={styles.checkIcon}>✓</span>
              {courseData.status}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.generalSummary}>
        <div className={styles.summaryHeader}>
          <span className={styles.summaryTitle}>Resumen General</span>
        </div>
      </div>
    </div>
  );
};

export default Courses;
