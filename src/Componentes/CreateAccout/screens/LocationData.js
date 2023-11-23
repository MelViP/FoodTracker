import { Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import countrySelect from "country-select-js";

export const LocationData = () => {
  const [country, setCountry] = useState();

  useEffect(() => {
    if (countrySelect.init) {
      countrySelect.init();
    }
  }, []);

  return (
    <fieldset>
      <Select
        labelId="Seleccione su país"
        id="Seleccione su país"
        label="País"
        onChange={(event) => setCountry(event.target.value)}
      >
        <countrySelect country={country} onCountryChange={setCountry} />
      </Select>
    </fieldset>
  );
};
