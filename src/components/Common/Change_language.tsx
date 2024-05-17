import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "../../Styles/flag.css";

const ChangeLanguage = () => {
  type LanguageCode = string;
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("en");

  const onSelectLanguage = (code: LanguageCode) => setSelectedLanguage(code);

  console.log("SELECTED LANGUAGE", selectedLanguage);
  
  return (
    <div>
      <ReactFlagsSelect
        selected={selectedLanguage}
        onSelect={onSelectLanguage}
        searchable={true}
        showSelectedLabel={true}
        countries={["US", "GB", "DE", "FR", "ES"]} 
        customLabels={{ US: "English", GB: "English", DE: "German", FR: "French", ES: "Spanish" }} 
        className="edit_language" 
      />
    </div>
  );
};

export default ChangeLanguage;
