import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { PersonalData } from "./screens/PersonalData";
import { LocationData } from "./screens/LocationData";
import "./CreateAccount.css"

export const CreateAccount = () => {
  return (
    <>
    <h1 className="createAccount-title">Create your account</h1>
      <form className="createAccount-form">

        {/* AQUI VA LO DE ANDY PARA CAMBIAR DE PANTALLA */}

        <PersonalData />

        <LocationData />

        <Button variant="contained" color="secondary" >Create Account</Button>
        
      </form>
    </>
  );
};
