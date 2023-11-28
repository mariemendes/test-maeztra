// src/components/Partner.js
import React from 'react';
import styles from './Partner.module.css';
import PartnerItem from '../components/PartnerItem/PartnerItem';
import Title from '../components/Title/Title';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useMediaQuery } from 'react-responsive';
import { partnerItems } from './partnerItems';

const Partner = () => {
  const carouselSettings = {
    showThumbs: false,
    infiniteLoop: true,
    showStatus: false,
  };

  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div className={styles.partner}>
      <div>
        <Title size="32px">Marcas Parceiras</Title>
      </div>
      <div className={styles.divPartners}>
        {isMobile ? (
          <Carousel {...carouselSettings}>
            {partnerItems.map((item, index) => (
              <div key={index}>
                <PartnerItem imgSrc={item.imgSrc} altText={item.altText} />
              </div>
            ))}
          </Carousel>
        ) : (
          partnerItems.map((item, index) => (
            <PartnerItem
              key={index}
              imgSrc={item.imgSrc}
              altText={item.altText}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Partner;
