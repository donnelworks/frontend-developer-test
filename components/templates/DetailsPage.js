import { ProductDesc, ProductInfo } from "../molecules";
import { DetailProducts } from "../organisms";

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

export default DetailsPage;
