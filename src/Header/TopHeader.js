import React from 'react';
import styles from './TopHeader.module.css';
import Paragraph from '../components/Paragraph/Paragraph';

const TopHeader = () => {
  return (
    <div className={styles.divTopHeader}>
      <Paragraph size="10px">
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </Paragraph>
    </div>
  );
};

export default TopHeader;
