import React from "react";
import PropTypes from "prop-types";
import { Button } from "../atoms";
import { number } from "../../utils";

const ProductItem = ({ id, thumbnail, title, description, rating, price }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={thumbnail} className="card-img-top" alt="thumbnail" />
        <div className="card-body">
          <h6 className="card-title text-truncate">{title}</h6>
          <p className="card-text">{description}</p>
          <div className="card-item mb-2">
            <ul>
              <li className="card-item_rating">
                <img src="/assets/imgs/icons/star.svg" className="me-1" />
                {rating}
              </li>
              <li className="card-item_price">${number(price)}</li>
            </ul>
          </div>
          <div className="d-grid col-8 mx-auto">
            <Button href={`/Details/${id}`} label="Details" />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
