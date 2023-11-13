import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { PreLoader } from "./Componentes/PreLoader.js/PreLoader";
import { PrincipalScreen } from "./Componentes/PrincipalScreen/PrincipalScreen";
import { SignUp } from "./Componentes/SignUp/SignUp";
import { CreateAccount } from "./Componentes/CreateAccout/CreateAccount";

function App() {
  return (
    <>
        <PreLoader />
        {/* <PrincipalScreen /> */}
        {/* <SignUp /> */}
        <CreateAccount />

        {/* <BrowserRouter>
          <Routes><Route element={}/></Routes>
        </BrowserRouter> */}
    </>
  );
}

export default App;
