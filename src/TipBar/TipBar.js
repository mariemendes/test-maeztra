import React from 'react';
import styles from './TipBar.module.css';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive';
import { items } from './TipBarItems';

const TipBar = () => {
  const carouselSettings = {
    showThumbs: false,
    infiniteLoop: true,
    showStatus: false,
  };

  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div className={styles.divTipBar}>
      <div>
        <Title size="16px">Por que comprar na Maeztra?</Title>
      </div>
      <div className={styles.divTipBarItems}>
        {isMobile ? (
          <Carousel {...carouselSettings}>
            {items.map((item, index) => (
              <div key={index} className={styles.items}>
                <div>
                  <img src={item.imgSrc} alt={item.altText} />
                </div>
                <div>
                  <span>{item.title}</span>
                  <Paragraph size="12px">{item.description}</Paragraph>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          items.map((item, index) => (
            <div key={index} className={styles.items}>
              <div>
                <img src={item.imgSrc} alt={item.altText} />
              </div>
              <div>
                <span>{item.title}</span>
                <Paragraph size="12px">{item.description}</Paragraph>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TipBar;
