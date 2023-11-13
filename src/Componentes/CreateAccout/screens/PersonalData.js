import { FormControl, FormLabel, Select, TextField } from "@mui/material";

export const PersonalData = () => {
  return (
    <>
      <FormControl>
        <FormLabel shrink>Name</FormLabel>
        <TextField variant="outline" placeholder="Name" color="secondary" />
      </FormControl>
      <FormControl>
        <FormLabel shrink>Lastname</FormLabel>
        <TextField variant="outline" placeholder="Lastname" />
      </FormControl>
      <FormControl>
        <FormLabel shrink>E-mail</FormLabel>
        <TextField variant="outline" placeholder="E-mail" />
      </FormControl>
      <FormControl>
        <FormLabel shrink>Birth date</FormLabel>
        <Select
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
      </FormControl>
    </>
  );
};
