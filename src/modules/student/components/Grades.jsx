import React from 'react';
import styles from '../styles/Grades.module.css';

const Grades = () => {
  // Datos de ejemplo basados en la imagen
  const subjectData = {
    name: 'ingles',
    average: '15.00',
    totalGrades: 1,
    teacher: 'jose diaz'
  };

  const gradesData = [
    {
      subject: 'ingles',
      subjectCode: 'IN15',
      teacher: 'jose diaz',
      evaluationType: 'Trabajo Práctico',
      grade: '15.0',
      status: 'Aprobado',
      date: '03/10/2025',
      observations: 'bueno'
    }
  ];

  return (
    <div className={styles.gradesContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Mis Calificaciones</h1>
        <p className={styles.subtitle}>Todas tus notas y calificaciones</p>
      </div>

      <div className={styles.subjectSummaryCard}>
        <div className={styles.subjectName}>{subjectData.name}</div>
        <div className={styles.subjectAverage}>{subjectData.average}</div>
        <div className={styles.subjectInfo}>
          {subjectData.totalGrades} nota(s) | Docente: {subjectData.teacher}
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}>☰</div>
        <span className={styles.sectionTitle}>Todas mis Notas</span>
      </div>

      <div className={styles.gradesTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Materia</div>
          <div className={styles.headerCell}>Docente</div>
          <div className={styles.headerCell}>Tipo de Evaluación</div>
          <div className={styles.headerCell}>Nota</div>
          <div className={styles.headerCell}>Estado</div>
          <div className={styles.headerCell}>Fecha</div>
          <div className={styles.headerCell}>Observaciones</div>
        </div>

        {gradesData.map((grade, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.cell}>
              <div className={styles.subjectName}>{grade.subject}</div>
              <div className={styles.subjectCode}>{grade.subjectCode}</div>
            </div>
            <div className={styles.cell}>{grade.teacher}</div>
            <div className={styles.cell}>{grade.evaluationType}</div>
            <div className={styles.cell}>
              <span className={styles.gradeValue}>{grade.grade}</span>
            </div>
            <div className={styles.cell}>
              <span className={styles.statusBadge}>
                <span className={styles.checkIcon}>✓</span>
                {grade.status}
              </span>
            </div>
            <div className={styles.cell}>{grade.date}</div>
            <div className={styles.cell}>{grade.observations}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grades;
