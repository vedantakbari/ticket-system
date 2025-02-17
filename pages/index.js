import { useState } from 'react';
import styles from '../styles/style.css';

export default function Home() {
  const [exploded, setExploded] = useState(false);

  const handleCubeClick = () => {
    setExploded(true);
    setTimeout(() => setExploded(false), 1000); // Reset after animation
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Ticket System</h1>
      <p className={styles.description}>Your support tickets at your fingertips.</p>
      
      <div 
        className={`${styles.explodeCube} ${exploded ? styles.exploded : ''}`} 
        onClick={handleCubeClick}
      />
    </div>
  );
}