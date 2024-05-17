import React, { useState } from "react";
import Select, { MultiValue, ActionMeta } from "react-select";

interface FilterDropdownProps {
  onFilter: (filter: any) => void;
}

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
];

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onFilter }) => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  const handleFilterChange = (newValue: MultiValue<any>, actionMeta: ActionMeta<any>) => {
    setSelectedOptions([...newValue]);
    onFilter([...newValue]);
  };

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleFilterChange}
      placeholder="Filter by..."
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default FilterDropdown;