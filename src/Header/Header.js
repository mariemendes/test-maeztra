import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import accountIcon from '../components/icons/account.svg';
import heartIcon from '../components/icons/heart.svg';
import lookIcon from '../components/icons/look.svg';
import bagIcon from '../components/icons/bag.svg';
import Button from '../components/Button/Button';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.headerMobile}`)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div>
      {isMobile ? (
        <header
          className={`${styles.headerMobile} ${
            isMenuOpen ? styles.menuOpen : ''
          }`}
        >
          <div className={styles.divHeaderThree}>
            <button
              onClick={toggleMenu}
              className={`${styles.center} ${isMenuOpen ? styles.active : ''}`}
            >
              <div className={styles.center}>
                <div></div>
              </div>
            </button>
          </div>
          <div className={styles.divHeaderOne}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png"
                alt="Maeztra Logo"
              />
            </a>
          </div>
          <div className={styles.divHeaderThree}>
            <ul>
              <li>
                <a href="/">
                  <img src={lookIcon} alt="Search" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={bagIcon} alt="My bag" />
                </a>
              </li>
            </ul>
          </div>
          {isMenuOpen && (
            <div className={styles.divNavMobile}>
              <nav className={styles.navMobile}>
                <ul>
                  <li>
                    <a href="/">Novidades</a>
                  </li>
                  <li>
                    <a href="/">Vestidos</a>
                  </li>
                  <li>
                    <a href="/">Roupas</a>
                  </li>
                  <li>
                    <a href="/">Sapatos</a>
                  </li>
                  <li>
                    <a href="/">Lingerie</a>
                  </li>
                  <li>
                    <a href="/">Acessórios</a>
                  </li>
                  <li>
                    <a href="/">OUTLET</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </header>
      ) : (
        <div>
          <header className={styles.headerDesktop}>
            <div className={styles.divHeaderOne}>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png"
                  alt="Maeztra Logo"
                />
              </a>
            </div>
            <div className={styles.divHeaderTwo}>
              <input type="text" placeholder="O Que você Busca?" />
              <Button label="Buscar" />
            </div>
            <div className={styles.divHeaderThree}>
              <ul>
                <li>
                  <img src={accountIcon} alt="My Account" />
                  <a href="/">Minha Conta</a>
                </li>
                <li>
                  <img src={heartIcon} alt="My Favorites" />
                  <a href="/">Meus Favoritos</a>
                </li>
                <li>
                  <img src={bagIcon} alt="My bag" />
                  <a href="/">Meu Carrinho</a>
                </li>
              </ul>
            </div>
          </header>
          <div className={styles.divNavDesktop}>
            <nav className={styles.navDesktop}>
              <li>
                <a href="/">Novidades</a>
              </li>
              <li>
                <a href="/">Vestidos</a>
              </li>
              <li>
                <a href="/">Roupas</a>
              </li>
              <li>
                <a href="/">Sapatos</a>
              </li>
              <li>
                <a href="/">Lingerie</a>
              </li>
              <li>
                <a href="/">Acessórios</a>
              </li>
              <li>
                <a href="/">OUTLET</a>
              </li>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
