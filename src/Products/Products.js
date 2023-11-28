import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { productItem } from './productItem';

const Products = () => {
  return (
    <>
      <ProductCard productItem={productItem} />
    </>
  );
};

export default Products;
