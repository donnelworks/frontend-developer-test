import PropTypes from "prop-types";
import { ProductItem } from "../molecules";

const Products = ({ products }) => {
  return (
    <section>
      <div className="container mb-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 py-5">
          {products.map((product) => {
            const { id, thumbnail } = product;
            return (
              <div key={id} className="col">
                <ProductItem id={id} thumbnail={thumbnail} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
