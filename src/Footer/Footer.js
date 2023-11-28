import React, { useState } from 'react';
import styles from './Footer.module.css';
import Title from '../components/Title/Title';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [isAccountOpen, setAccountOpen] = useState(false);
  const [isLocationsOpen, setLocationsOpen] = useState(false);

  const toggleInfo = () => {
    setInfoOpen(!isInfoOpen);
    setAccountOpen(false);
    setLocationsOpen(false);
  };

  const toggleAccount = () => {
    setInfoOpen(false);
    setAccountOpen(!isAccountOpen);
    setLocationsOpen(false);
  };

  const toggleLocations = () => {
    setInfoOpen(false);
    setAccountOpen(false);
    setLocationsOpen(!isLocationsOpen);
  };

  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div className={styles.footer}>
      {isMobile ? (
        <div className={styles.footerMobile}>
          <button onClick={toggleInfo} className={styles.toggleButton}>
            <span>Informações</span> <span>{isInfoOpen ? '-' : '+'}</span>
          </button>
          <div className={`${styles.menu} ${isInfoOpen ? styles.open : ''}`}>
            <ul>
              <li>
                <a href="/">Quem Somos</a>
              </li>
              <li>
                <a href="/">Prazo de Envio</a>
              </li>
              <li>
                <a href="/">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="/">Promoções e Cupons</a>
              </li>
            </ul>
          </div>

          <button onClick={toggleAccount} className={styles.toggleButton}>
            <span>Minha Conta</span>
            <span>{isAccountOpen ? '-' : '+'}</span>
          </button>
          <div className={`${styles.menu} ${isAccountOpen ? styles.open : ''}`}>
            <ul>
              <li>
                <a href="/">Minha Conta</a>
              </li>
              <li>
                <a href="/">Meus Pedidos</a>
              </li>
              <li>
                <a href="/">Cadastre-se</a>
              </li>
            </ul>
          </div>
          <button onClick={toggleLocations} className={styles.toggleButton}>
            <span>Onde nos Encontrar</span>
            <span>{isLocationsOpen ? '-' : '+'}</span>
          </button>
          <div
            className={`${styles.menu} ${isLocationsOpen ? styles.open : ''}`}
          >
            <ul>
              <li>
                <a href="/">Lojas</a>
              </li>
              <li>
                <a href="/">Endereço</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.footer}>
          <div className={styles.divFooter}>
            <div>
              <ul>
                <li>
                  <Title size="16px">Informações</Title>
                </li>
                <li>
                  <a href="/">Quem Somos</a>
                </li>
                <li>
                  <a href="/">Prazo de Envio</a>
                </li>
                <li>
                  <a href="/">Trocas e Devoluções</a>
                </li>
                <li>
                  <a href="/">Promoções e Cupons</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Title size="16px">Minha Conta</Title>
                </li>
                <li>
                  <a href="/">Minha Conta</a>
                </li>
                <li>
                  <a href="/">Meus Pedidos</a>
                </li>
                <li>
                  <a href="/">Cadastre-se</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Title size="16px">Onde nos Encontrar</Title>
                </li>
                <li>
                  <a href="/">Lojas</a>
                </li>
                <li>
                  <a href="/">Endereço</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
