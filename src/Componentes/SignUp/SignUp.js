import { useState } from "react";
import "./SingUp.css";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

export const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div className="signUp-container">
      <h1>Welcome to Food Tracker</h1>

      <Input variant="outline" placeholder="John Doe" aria-label="Name" />

      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleShow}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
