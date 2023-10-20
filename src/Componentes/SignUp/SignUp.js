import { useState } from "react";
import "./SingUp.css";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import { AiOutlineArrowRight } from 'react-icons/ai';

export const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div className="signUp-container">
      <h1>Access Food Tracker</h1>

      <Stack className="inputs-signUp">
        <label for="input-name">Name</label>
        <Input
          variant="outline"
          placeholder="John Doe"
          className="name-signup"
        />

        <label for="input-name">Password</label>
        <InputGroup className="password-signup">
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
        <Button variant={"link"}>
          <strong>Forgot my password</strong>
        </Button>
        <Button className="Btn-signup" colorScheme='purple' rightIcon={<AiOutlineArrowRight/>} >Sign In</Button>
      </Stack>

      <section className="createAccount-signup">
        <p>Don't have an account? </p>
      <Button variant={"ghost"}>Create an account</Button>
      </section>
      
    </div>
  );
};
