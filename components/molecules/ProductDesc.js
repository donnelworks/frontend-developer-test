import { useContext } from "react";
import { DetailsContext } from "../../contexts/DetailsContext";
import { Slide } from "../atoms";

const ProductDesc = () => {
  // Context
  const { description } = useContext(DetailsContext);

  return (
    <div className="col-md-8">
      <div className="row">
        <div className="col-12 pb-4">
          <Slide />
        </div>
        <div className="col-12">
          <h6 className="description-title">Description</h6>
          <p className="description-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
