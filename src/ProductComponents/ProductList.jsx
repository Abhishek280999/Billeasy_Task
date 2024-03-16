import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    console.log(products)
    const renderStars = (rating) => {
        const filledStars = '★'.repeat(Math.floor(rating));
        const halfStar = rating % 1 !== 0 ? '☆' : '';
        const emptyStars = '☆'.repeat(Math.floor(5 - rating));
        return `${filledStars}${halfStar}${emptyStars}`;
      };
  return (
    <>

    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
        <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <h2>{product.category}</h2>
                <div className="rating">{renderStars(product.rating.rate)}</div>
                <div className="price">Price: ${product.price}</div>
              </div>
            </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
