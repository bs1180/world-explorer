import React, { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useSearchCountries } from "../hooks/useSearchCountries";
import "@reach/combobox/styles.css";

interface Props {
  onSelect(value: string): void
}

export const Search: React.FC<Props> = ({ onSelect }) => {
  const [term, setTerm] = useState();
  const results = useSearchCountries(term);

  const handleChange = (event) => setTerm(event.target.value);

  const handleSelect = (value) => {
    const f = results.find((r) => r.name === value);
    onSelect(f.code)
  };

  return (
    <Combobox aria-label="Country search" onSelect={handleSelect}>
      <ComboboxInput
        className="border text-xl px-4 py-4 rounded-lg"
        placeholder="Where will you learn about?"
        onChange={handleChange}
      />
      {results && (
        <ComboboxPopover className="shadow-popup">
          {results.length > 0 ? (
            <ComboboxList>
              {results.map((result, index) => (
                <ComboboxOption key={index} value={result.name} />
              ))}
            </ComboboxList>
          ) : (
            <span style={{ display: "block", margin: 8 }}>
              No results found
            </span>
          )}
        </ComboboxPopover>
      )}
    </Combobox>
  );
};
