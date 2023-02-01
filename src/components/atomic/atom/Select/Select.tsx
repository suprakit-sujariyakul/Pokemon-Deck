import { Select as SelectAntd } from "antd";

const Select = ({
  options,
  onChange
}: {
  options: object[];
  onChange: (value: string) => void;
}) => {
  return (
    <SelectAntd
      placeholder="Select"
      style={{ width: 200 }}
      listHeight={150}
      onChange={(value, option) => onChange(option)}
      options={options}
    />
  );
};

export default Select;
