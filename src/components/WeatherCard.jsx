import React from 'react';

const WeatherCard = ({ location, temperature }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.location}>{location}</h2>
      <p style={styles.temperature}>{temperature}°C</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '200px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  location: {
    margin: '0 0 8px 0',
    fontSize: '1.5rem',
    color: '#333'
  },
  temperature: {
    margin: 0,
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff4500'
  }
};

export default WeatherCard;
