import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContextShop } from "../context/CartContext";

import { Box, Button } from "@chakra-ui/react";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContextShop);

  return (
    <>
      <Link to="/cart">
        <Button variant="ghost">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
          />
          <span className="material-symbols-outlined"> shopping_bag </span>
          <Box> {cartQuantity()} </Box>
        </Button>
      </Link>
    </>
  );
};

export default CartWidget;
