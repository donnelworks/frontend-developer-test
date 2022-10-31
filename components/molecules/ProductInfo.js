import React, { useContext, useEffect, useState } from "react";
import { number } from "../../utils";
import { DetailsContext } from "../../contexts/DetailsContext";

const ProductInfo = () => {
  // Context
  const { title, rating, price, category, brand } = useContext(DetailsContext);

  // State
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (price) {
      setLoading(false);
    }
  }, [price]);

  if (loading) {
    return null;
  }

  return (
    <div className="col-md-4 px-md-5">
      <h3 className="product-info_title mb-0">{title}</h3>
      <img src="/assets/imgs/icons/star.svg" className="me-1" />
      <span className="product-info_rating">{rating}</span>

      <h2 className="product-info_price mt-2 mb-3">${number(price)}</h2>

      <p className="product-info_sub mb-1">
        Category: <strong>{category}</strong>
      </p>
      <p className="product-info_sub">
        Brand: <strong>{brand}</strong>
      </p>
    </div>
  );
};

export default ProductInfo;
