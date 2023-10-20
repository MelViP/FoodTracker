import { ChakraProvider } from "@chakra-ui/react";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { PreLoader } from "./Componentes/PreLoader.js/PreLoader";
import { PrincipalScreen } from "./Componentes/PrincipalScreen/PrincipalScreen";
import { SignUp } from "./Componentes/SignUp/SignUp";

function App() {
  return (
    <>
      <ChakraProvider>
        <PreLoader />
        {/* <PrincipalScreen /> */}
        <SignUp />

        <BrowserRouter>
          <Routes>{/* <Route element={}/> */}</Routes>
        </BrowserRouter>

      </ChakraProvider>
    </>
  );
}

export default App;
