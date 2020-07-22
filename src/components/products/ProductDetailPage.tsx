import React from 'react';

const ProductPage: React.FC = () => {
  return (
    <div className="product-detail">
      <div className="row">
        <div className="product-detail__preview">
          <div className="product-detail__preview--thumbnails">
            <img
              src={require('../../assets/img/product/product-detail-02.jpg')}
              alt="#"
            />
            <img
              src={require('../../assets/img/product/product-detail-01.jpg')}
              alt="#"
            />
            <img
              src={require('../../assets/img/product/product-detail-05.jpg')}
              alt="#"
            />
            <img
              src={require('../../assets/img/product/product-detail-04.jpg')}
              alt="#"
            />
          </div>
          <div className="product-detail__preview--image">
            <img
              src={require('../../assets/img/product/product-detail-03.jpg')}
              alt="#"
            />
          </div>
        </div>

        <div className="product-detail__content">
          <h1 className="product-detail__content--title">
            Lorem, ipsum dolor.
          </h1>
          <p className="product-detail__price">
            <span className="product-detail__price--normal">$250.00</span>
          </p>
          <p className="product-detail__content--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facilis
            vitae at velit cumque sequi, deleniti vero aliquid molestiae,
            tenetur autem magni. Hic reiciendis distinctio rem molestias ad ut
            ullam. Molestiae unde hic cum architecto illum voluptates nam
            adipisci nisi nobis ut sequi libero quaerat distinctio suscipit
            perferendis sed sunt dicta alias, ex error est saepe! Maxime dolore
            obcaecati odit ut aspernatur, enim ullam tenetur earum, rerum, ipsa
            veritatis accusantium quis eaque voluptates nam vel nisi tempore a?
            Sed, facilis?
          </p>

          <button className="product-detail__add-to-cart">
            <svg width="32px" height="32px" viewBox="0 0 512 512">
              <circle
                cx="176"
                cy="416"
                r="16"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px'
                }}
              />
              <circle
                cx="400"
                cy="416"
                r="16"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px'
                }}
              />
              <polyline
                points="48 80 112 80 160 352 416 352"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px'
                }}
              />
              <path
                d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
                style={{
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px'
                }}
              />
            </svg>

            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
