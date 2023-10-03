import styles from './TextInput.module.css';
import React from 'react';

interface TextInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function TextInput({ ...props }: TextInputProps) {
  return <input className={styles.input} {...props} />;
}
