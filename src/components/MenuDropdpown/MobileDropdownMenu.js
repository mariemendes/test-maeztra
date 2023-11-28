import React, { useState } from 'react';
import styles from './MobileDropdownMenu.module.css';

const MobileDropdownMenu = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobileDropdownMenu}>
      <div onClick={toggleMenu} className={styles.menuTitle}>
        {title}
      </div>
      {isOpen && <div className={styles.menuItems}>{children}</div>}
    </div>
  );
};

export default MobileDropdownMenu;
