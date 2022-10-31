import React from "react";

const ProductInfo = () => {
  return (
    <div className="col-md-4 px-md-5">
      <h3 className="product-info_title mb-0">Product Title</h3>
      <img src="/assets/imgs/icons/star.svg" className="me-1" />
      <span className="product-info_rating">4.3</span>

      <h2 className="product-info_price">$1,000</h2>

      <p>
        Category: <span>Category Name</span>
      </p>
      <p>
        Brand: <span>Brand Name</span>
      </p>
    </div>
  );
};

export default ProductInfo;
