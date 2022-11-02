import { ProductDesc, ProductInfo } from "../molecules";
import { DetailProducts } from "../organisms";
import PropTypes from "prop-types";

const DetailsPage = ({ product }) => {
  const { images, description, title, rating, price, category, brand } =
    product;
  return (
    <>
      <DetailProducts>
        <ProductDesc images={images} description={description} />
        <ProductInfo
          title={title}
          rating={rating}
          price={price}
          category={category}
          brand={brand}
        />
      </DetailProducts>
    </>
  );
};

DetailsPage.propTypes = {
  product: PropTypes.object.isRequired,
};

export default DetailsPage;
