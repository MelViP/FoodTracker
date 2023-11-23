import { FormControl, Select, FormLabel, TextField } from "@mui/material";

export const PersonalData = () => {
  return (
    <>
      <FormControl>
        <FormLabel shrink="true" >Name</FormLabel>
        <TextField variant="outlined" placeholder="Name" color="secondary" />
      </FormControl>
      
      <FormControl>
        <FormLabel shrink="true" >Lastname</FormLabel>
        <TextField variant="outlined" placeholder="Lastname" />
      </FormControl>

      <FormControl>
        <FormLabel shrink="true" >E-mail</FormLabel>
        <TextField variant="outlined" placeholder="E-mail" />
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
