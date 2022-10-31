import { Slide } from "../atoms";

const ProductDesc = ({ images }) => {
  return (
    <div className="col-md-8">
      <div className="row">
        <div className="col-12 pb-4">
          <Slide images={images} />
        </div>
        <div className="col-12">
          <h6 className="description-title">Description</h6>
          <p className="description-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
