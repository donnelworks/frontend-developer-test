import { Slide } from "../atoms";
import { Back } from "../molecules";
import { DetailProducts, Header } from "../organisms";

const DetailsPage = ({ product }) => {
  const { images } = product;
  return (
    <>
      <Header>
        <Back href="/" text="Back to products" />
      </Header>
      <DetailProducts>
        <div className="col-md-8">
          <Slide imgs={images} />
        </div>
        <div className="col-md-4">Information</div>
      </DetailProducts>
    </>
  );
};

export default DetailsPage;
