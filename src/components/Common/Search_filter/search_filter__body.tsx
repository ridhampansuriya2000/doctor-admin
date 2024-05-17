import React, { useState } from "react";
import Search from "./Search";

const search_filter__body = () => {
  const options = [
    { value: "1", name: "Option 1" },
    { value: "2", name: "Option 2" },
    { value: "3", name: "Option 3" },
  ];
  const [value, setValue] = useState("");
  const multiple = false;
  const disabled = false;
  return (
    <div>
      <Search
        options={options}
        value={value}
        multiple={multiple}
        disabled={disabled}
      />
    </div>
  );
};

export default search_filter__body;
