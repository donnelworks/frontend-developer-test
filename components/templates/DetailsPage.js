import { ProductDesc, ProductInfo } from "../molecules";
import { DetailProducts } from "../organisms";

const DetailsPage = () => {
  return (
    <>
      <DetailProducts>
        <ProductDesc />
        <ProductInfo />
      </DetailProducts>
    </>
  );
};

export default DetailsPage;
