import { Back, ProductDesc, ProductInfo } from "../molecules";
import { DetailProducts, Header } from "../organisms";

const DetailsPage = ({ product }) => {
  const { images } = product;
  return (
    <>
      <Header>
        <Back href="/" text="Back to products" />
      </Header>
      <DetailProducts>
        <ProductDesc images={images} />
        <ProductInfo />
      </DetailProducts>
    </>
  );
};

export default DetailsPage;
