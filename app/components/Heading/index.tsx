import React from 'react';
import styles from './Heading.module.css';
import reactIcon from '@/public/react.svg';
import javascriptIcon from '@/public/javascript.svg';
import pythongIcon from '@/public/python.svg';
import Image from 'next/image';

export default function Heading() {
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>Code nico programming</h1>
      <h3 className={styles.subtitle}>
        Learn with, and enbark in your journey in the glorious <br /> world of
        Web Development.
      </h3>
      <Image
        className={styles['javascript-icon']}
        src={javascriptIcon}
        alt={'javscript-icon'}
      />
      <Image
        className={styles['react-icon']}
        src={reactIcon}
        alt={'react-icon'}
      />
      <Image
        className={styles['python-icon']}
        src={pythongIcon}
        alt={'javscript-icon'}
      />
    </div>
  );
}
