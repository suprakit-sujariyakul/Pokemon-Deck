import { Select as SelectAntd } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Select = ({
  defaultValue,
  options
}: {
  defaultValue: string;
  options: object[];
}) => {
  return (
    <SelectAntd
      defaultValue={defaultValue}
      style={{ width: 200 }}
      listHeight={150}
      onChange={handleChange}
      options={options}
    />
  );
};

export default Select;
