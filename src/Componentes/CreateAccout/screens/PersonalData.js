import { Input } from "@chakra-ui/react";

export const PersonalData = () => {
  return (
    <>
      <fieldset>
        <label>
          Name
          <Input variant="outline" placeholder="Name" />{" "}
        </label>
      </fieldset>
      <fieldset>
        <legend>Lastname</legend>
        <Input variant="outline" placeholder="Lastname" />
      </fieldset>
      <fieldset>
        <legend>E-mail</legend>
        <Input variant="outline" placeholder="E-mail" />
      </fieldset>
      <fieldset>
          <legend>Birth date</legend>
          <Input
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
          />
        </fieldset>
    </>
  );
};
