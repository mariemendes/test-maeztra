import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import styles from './Banner.module.css';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  const carouselSettings = {
    showThumbs: false,
    infiniteLoop: true,
    showStatus: false,
  };

  return (
    <Carousel {...carouselSettings} className={styles.carouselBanner}>
      <div>
        <img src="https://i.imgur.com/ftECh3G.png" alt="Promoções de Outono" />
        <div className={styles.txtBanner}>
          <Title size={isMobile ? '30px' : '40px'}>Promoções de Outono</Title>
          <Paragraph size={isMobile ? '14px' : '20px'}>
            Confiras os melhores looks para combinar com você nesse Outono
          </Paragraph>
          <a href="/">
            <Button className={styles.buttonBanner} label="Conferir"></Button>
          </a>
        </div>
      </div>
      <div>
        <img src="https://i.imgur.com/ftECh3G.png" alt="Promoções de Outono" />
        <div className={styles.txtBanner}>
          <Title size={isMobile ? '30px' : '40px'}>Promoções de Outono</Title>
          <Paragraph size={isMobile ? '14px' : '20px'}>
            Confiras os melhores looks para combinar com você nesse Outono
          </Paragraph>
          <a href="/">
            <Button className={styles.buttonBanner} label="Conferir"></Button>
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
