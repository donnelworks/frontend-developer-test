import { Input, Select } from "../atoms";

const Filter = ({ categories, onChange }) => {
  return (
    <div className="row">
      <div className="col-md-3 py-2">
        <Input placeholder="Search" />
      </div>
      <div className="col-md-2 py-2">
        <Select
          options={categories}
          onChange={(val) => onChange(val)}
          placeholder="category"
        />
      </div>
    </div>
  );
};

export default Filter;
