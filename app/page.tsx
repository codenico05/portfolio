import styles from './page.module.css';
import Heading from '@/app/components/Heading';
import React from 'react';
import TextInput from '@/app/components/TextInput';

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading />
      <div className={styles.newsletter}>
        <TextInput placeholder="Enter your email..." />
        <button className={styles['subscribe-btn']}>Subscribe</button>
      </div>
    </main>
  );
}
