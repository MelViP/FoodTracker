import { Select } from "@chakra-ui/react";

export const LocationData = () => {
  return (
    <>
      <fieldset>
        <legend>Country</legend>
        <Select placeholder="Select option">
          <option value={"Colombia"}>Colombia</option>
          <option value={"México"}>México</option>
          <option value={"Ecuador"}>Ecuador</option>
          <option value={"Costa Rica"}>Costa Rica</option>
          <option value={"Brazil"}>Brazil</option>
          <option value={"Bolivia"}>Bolivia</option>
          <option value={"El Salvador"}>El Salvador</option>
          <option value={"Chile"}>Chile</option>
          <option value={"Perú"}>Perú</option>
          <option value={"Argentina"}>Argentina</option>
          <option value={"Venezuela"}>Venezuela</option>
          <option value={"Chile"}>Chile</option>
          <option value={"Uruguay"}>Uruguay</option>
          <option value={"Belice"}>Belice</option>
          <option value={"Paraguay"}>Paraguay</option>
        </Select>
      </fieldset>
    </>
  );
};
