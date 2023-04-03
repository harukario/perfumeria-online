import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContextShop } from "../context/CartContext";

import { Button, Box,Grid,GridItem, Image, Flex, Text} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Cart = () => {
  const { cart, setCart, total } = useContext(CartContextShop);

  const handleIncrementQuantity = (id, stock) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id && item.cantidad < stock) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
            subtotal: (item.cantidad + 1) * item.price,
          };
        } else {
          return item;
        }
      })
    );
  };

  const handleDecrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              cantidad: item.cantidad - 1,
              subtotal: (item.cantidad - 1) * item.price,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.cantidad > 0)
    );
  };

  const borrar = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Flex
        justifyContent="center"
        minHeight="30em"
        bg="#F7FAFC"
        color="blackAlpha.900"
        fontWeight="light"
      >
        {cart.length === 0 ? (
          <Box p="6" rounded="xl" mt="20">
            <Flex flexDirection="column" alignItems="center">
              <Box p="3" fontWeight="bold" fontSize="lg">
                {" "}
                Su carrito está vacío
              </Box>
              <Box p="3">
                {" "}
                Para seguir comprando, navegue por las categorías en el sitio.
              </Box>
              <Box p="3">
                <Link to="/catalogue">
                  <Button
                    bg="black"
                    color="white"
                    size="md"
                    type="submit"
                    fontWeight="regular"
                  >
                    {" "}
                    Seguir navegando
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        ) : (
          <Box
            p="6"
            m="10"
            maxWidth="60%"
            bg="white"
            borderRadius="lg"
            color="black"
          >
            <Grid
              templateAreas={`
                    "h1 . h2 h3 h4 ."`}
              templateColumns="repeat(5,3fr)4fr"
              templateRows="2fr"
              gap={1}
              p="1rem"
              textAlign="center"
            >
              <GridItem area={"h1"}>PRODUCTO</GridItem>

              <GridItem area={"h2"} width="1fr">
                <p>PRECIO</p>
                <p>UNITARIO</p>
              </GridItem>

              <GridItem area={"h3"}>CANTIDAD</GridItem>

              <GridItem area={"h4"}>SUBTOTAL</GridItem>
            </Grid>

            {cart.map((prod) => (
              <Grid
                key={prod.id}
                templateAreas={`
                    "img nombre precio cantidad subtotal modificar"`}
                templateColumns="repeat(5,3fr)4fr"
                templateRows="2fr"
                gap={1}
                borderTop="1px solid #E2E8F0"
                p="1rem"
                textAlign="center"
              >
                <GridItem area={"img"}>
                  <Link className="link" to={`/item/${prod.id}`}>
                    <Image src={prod.picture} alt="Prod picture" />
                  </Link>
                </GridItem>

                <GridItem area={"nombre"}>
                  <Box>{prod.productName} </Box>
                  <Box fontSize="sm" color="grey">
                    {" "}
                    {prod.marca}
                  </Box>
                  <Box fontSize="sm" color="grey">
                    {" "}
                    {prod.presentacion}
                  </Box>
                </GridItem>

                <GridItem area={"precio"}>
                  <Box fontSize="lg" fontWeight="bold">
                    {" "}
                    ${prod.price}
                  </Box>
                </GridItem>

                <GridItem area={"cantidad"} textAlign="center">
                  <Text> {prod.cantidad}</Text>
                </GridItem>

                <GridItem area={"subtotal"}>
                  <Box fontSize="lg" fontWeight="bold">
                    {" "}
                    ${prod.subtotal}
                  </Box>
                </GridItem>

                <GridItem area={"modificar"}>
                  <Button
                    size="xs"
                    onClick={() => handleIncrementQuantity(prod.id, prod.stock)}
                  >
                    {" "}
                    +{" "}
                  </Button>
                  <Button
                    size="xs"
                    onClick={() => handleDecrementQuantity(prod.id)}
                  >
                    {" "}
                    -{" "}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => borrar(prod.id)}
                  >
                    {" "}
                    <DeleteIcon />{" "}
                  </Button>
                </GridItem>
              </Grid>
            ))}

            <Box
              m="3"
              p="10"
              fontWeight="semibold"
              fontSize="2xl"
              textAlign="right"
              borderTop="1px solid #E2E8F0"
            >
              {" "}
              <h3> Total: ${total()} </h3>{" "}
            </Box>
            <Flex justifyContent="center">
              <Link to="/Form">
                <Box w="80%" p="6" borderRadius="lg" m="6">
                  <Button
                    bg="black"
                    color="white"
                    size="md"
                    type="submit"
                    fontWeight="regular"
                  >
                    Finalizar compra
                  </Button>
                </Box>
              </Link>

              <Link to="/catalogue">
                <Box w="80%" p="6" textAlign="center" borderRadius="lg" m="6">
                  <Button
                    bg="black"
                    color="white"
                    size="md"
                    type="submit"
                    fontWeight="regular"
                  >
                    Seguir comprando
                  </Button>
                </Box>
              </Link>
            </Flex>
          </Box>
        )}
      </Flex>
    </>
  );
};
export default Cart;
