import React from 'react';

const UserProfile = ({ avatar, name, bio }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt={`${name}'s avatar`} style={styles.avatar} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '12px'
  },
  name: {
    margin: '0 0 8px 0',
    fontSize: '1.5em',
    color: '#333'
  },
  bio: {
    fontSize: '1em',
    color: '#666'
  }
};

export default UserProfile;
