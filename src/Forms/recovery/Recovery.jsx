import React, { useState } from 'react';
import styles from './Recovery.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'El nombre de usuario es requerido';
    }
    
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aquí iría la lógica para enviar los datos al servidor
      console.log('Formulario enviado:', formData);
      // Por ejemplo: loginUser(formData);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Nombre de Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ingresa tu nombre de usuario"
          />
          {errors.username && (
            <span className={styles.errorMessage}>{errors.username}</span>
          )}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ingresa tu contraseña"
          />
          {errors.password && (
              <span className={styles.errorMessage}>{errors.password}</span>
            )}
            <a href="">Recupera o Restablece tu contraseña</a>
        </div>
        
        <button type="submit" className={styles.button}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;