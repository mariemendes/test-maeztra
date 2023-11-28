import React from 'react';
import styles from './ProductCard.module.css';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';

const ProductCard = ({ productItem }) => {
  return (
    <div className={styles.divProducts}>
      <div className={styles.divProduct}>
        {productItem.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.url} alt={product.name} />
            <div className={styles.divProductInfos}>
              <div>
                {product.color.map((color, index) => (
                  <div
                    className={styles.colors}
                    key={index}
                    style={{
                      width: '27px',
                      height: '27px',
                      backgroundColor: color,
                      display: 'inline-block',
                      marginRight: '3px',
                    }}
                  ></div>
                ))}
              </div>
              <div className={styles.divDescriptionProduct}>
                <Title size="20px">{product.price}</Title>
                <Title size="16px">{product.name}</Title>
                <Paragraph size="12px">{product.description}</Paragraph>
                <Button label="Adicionar" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
