import { Input } from "@chakra-ui/react";

export const CreateAccount = () => {
  return (
    <>
      <form>
        <h1>Create your account</h1>
        <fieldset>
          <label>Name
          <Input variant="outline" placeholder="Name" /> </label>
        </fieldset>
      </form>

      <legend>Name</legend>
      <Input variant="outline" placeholder="Lastname" />
      <legend>Name</legend>
      <Input variant="outline" placeholder="E-mail" />
      <Input variant="outline" placeholder="Outline" />
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
      />
    </>
  );
};
