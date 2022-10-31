import PropTypes from "prop-types";
import { ProductItem } from "../molecules";

const ListProducts = ({ children }) => {
  return (
    <section>
      <div className="container mb-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {children}
        </div>
      </div>
    </section>
  );
};

ListProducts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListProducts;
