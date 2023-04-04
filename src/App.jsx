import React from "react";
import { Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Form from "./components/Form";
import Footer from "./components/Footer";
import DataForm from "./components/DataForm";
import LogIn from "./components/LogIn";
import { ChakraProvider, Box } from "@chakra-ui/react";
import CartContext from "./context/CartContext";

const App = () => {
  return (
    <ChakraProvider >
      <Box paddingTop="80px" bg="#F7FAFC">
        <CartContext>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/catalogue" element={<ItemListContainer greetings={"Todos los productos"} />}/>
            <Route exact path="/category/:category" element={<ItemListContainer />}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/dataForm" element={<DataForm />} />
          </Routes>
          <Footer />
        </CartContext>
      </Box>
    </ChakraProvider>
    
  );
};
export default App;
