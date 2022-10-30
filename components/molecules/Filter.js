import { Input, Select } from "../atoms";

const Filter = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <Input placeholder="Search" />
      </div>
      <div className="col-md-2">
        <Select />
      </div>
    </div>
  );
};

export default Filter;
