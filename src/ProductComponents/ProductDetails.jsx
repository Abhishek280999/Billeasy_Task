import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const renderStars = (rating) => {
    const filledStars = '★'.repeat(Math.floor(rating));
    const halfStar = rating % 1 !== 0 ? '☆' : '';
    const emptyStars = '☆'.repeat(Math.floor(5 - rating));
    return `${filledStars}${halfStar}${emptyStars}`;
  };

  const { id } = useParams();
  console.log(id, products)
  const product = products?.filter(prod => prod.id == id)[0];

  return (
    <div className="product-detail">
    
      {product && (
       <div className="detail-card ">
         <div className="detail-card1">
       <img src={product.image} alt={product.title} />
         </div>
       <div className="detail-info ">
       <h2 className='route'>Home/Posters/{product.title}</h2>
        <h2 className='poster'>Posters</h2>
         <h2 className='title'>{product.title}</h2>
         <div className="price">Price: ${product.price}</div>
         <p>Description: {product.description}</p>
        <div className='div'>
        <div className="quantity">
           <button>-</button>
           <span>Qty: 1</span>
           <button>+</button>
         </div>
         
         <div className="button-container">
           <button className="add-to-cart-button">ADD TO CART</button>
         </div>
        </div>
        <hr/>
        <p className='hr'>Category : <span>Posters</span> </p>
       </div>
     </div>
      )}
    </div>
  );
};

export default ProductDetail;
