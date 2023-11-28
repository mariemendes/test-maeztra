import React from 'react';
import styles from './Newsletter.module.css';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';

const Newsletter = () => {
  return (
    <div className={styles.divNewsletter}>
      <div>
        <Title size="24px">Receba Nossa Newsletter</Title>
      </div>
      <div>
        <input type="text" placeholder="Digite seu e-mail" />
        <Button label="Enviar" />
      </div>
    </div>
  );
};

export default Newsletter;
