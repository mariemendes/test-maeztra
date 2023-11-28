import React from 'react';
import styles from './PartnerItem.module.css';

const PartnerItem = ({ imgSrc, altText }) => {
  return (
    <div className={styles.items}>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default PartnerItem;
