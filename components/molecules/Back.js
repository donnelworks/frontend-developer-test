import PropTypes from "prop-types";
import { BackButton } from "../atoms";

const Back = ({ href, text }) => {
  return (
    <div className="row">
      <div className="col-12">
        <BackButton href={href} text={text} />
      </div>
    </div>
  );
};

Back.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Back;
