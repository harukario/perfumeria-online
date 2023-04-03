import { useState, useContext, useEffect } from "react";
import { CartContextShop } from "../context/CartContext";
import {
  Button,
  Collapse,
  Slide,
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";

import { useDisclosure } from "@chakra-ui/react";

const ItemCount = ({
  stock,
  productName,
  price,
  picture,
  id,
  marca,
  presentacion,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { cart, setCart, total } = useContext(CartContextShop);

  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState(price);
  const [mensaje, setMensaje] = useState(false);
  const [agregado, setAgregado] = useState(false);

  const less = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      setSubtotal((cantidad - 1) * price);
    }
  };

  const add = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
      setSubtotal((cantidad + 1) * price);
      setMensaje(false);
    } else {
      setMensaje(true);

      setTimeout(() => {
        setMensaje(false);
      }, 1000);
    }
  };

  const added = () => {
    const nuevoProducto = {
      id,
      productName,
      cantidad,
      price,
      picture,
      subtotal,
      stock,
      marca,
      presentacion,
    };
    const existingProductIndex = cart.findIndex(
      (product) => product.id === nuevoProducto.id
    );

    if (existingProductIndex !== -1) {
      const carritoActualizado = cart.map((prod) => {
        if (
          prod.id === nuevoProducto.id &&
          prod.cantidad + cantidad <= prod.stock
        ) {
          onToggle();
          setAgregado(true);
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          setAgregado(false);
          return prod;
        }
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, nuevoProducto]);
      onToggle();
      setAgregado(true);
    }
  };

  const borrar = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Box
        position="relative"
        fontWeight="thin"
        rounded="lg"
        borderColor="1px solid grey"
        zIndex="0"
      >
        <Flex justifyContent="center" alignItems="center" zIndex="0">
          <Button zIndex="0" bg="" width="2em" onClick={less}>
            {" "}
            -{" "}
          </Button>
          <Box zIndex="0" textAlign="center" width="3rem">
            {" "}
            {cantidad}{" "}
          </Box>
          <Button zIndex="0" bg="" width="2em" onClick={add}>
            {" "}
            +{" "}
          </Button>
        </Flex>

        <Button
          fontWeight="thin"
          size="md"
          bg="black"
          color="white"
          p="4"
          mt="0.2rem"
          onClick={() => {
            added();
          }}
        >
          {" "}
          AGREGAR AL CARRITO{" "}
        </Button>

        {mensaje && (
          <Collapse in={true} animateOpacity>
            <Box p="" color="black" bg="white" rounded="md" shadow="md">
              No hay más stock de este producto.
            </Box>
          </Collapse>
        )}
      </Box>

      {agregado && cart.length > 0 && (
        <Slide direction="left" in={isOpen}>
          <Box
            h="30rem"
            maxWidth="30rem"
            p="40px"
            color="black"
            mt="8rem"
            bg="white"
            rounded="md"
            shadow="md"
            overflow="auto"
            zIndex="2"
            position="relative"
          >
            <Flex justifyContent="right">
              {" "}
              <Button onClick={onToggle}>X</Button>{" "}
            </Flex>
            <Box fontWeight="bold">{productName} agregado con éxito!</Box>

            <Box
              maxWidth="26rem"
              bg="white"
              borderRadius="lg"
              color="black"
              fontSize="sm"
            >
              <Grid
                templateAreas={`
                        "h1 . h2 h3 h4"`}
                templateColumns="repeat(5,2fr)"
                templateRows="1fr"
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
                        
                        "img nombre precio cantidad subtotal"`}
                  templateColumns="repeat(5,2fr)"
                  templateRows="2fr"
                  gap={1}
                  borderTop="1px solid #E2E8F0"
                  p="1rem"
                  textAlign="center"
                >
                  <GridItem area={"img"}>
                    <Image src={prod.picture} alt="Prod picture" />
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
                    {prod.cantidad}
                  </GridItem>

                  <GridItem area={"subtotal"}>
                    <Box fontSize="lg" fontWeight="bold">
                      {" "}
                      ${prod.subtotal}
                    </Box>
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

              <Link to="/Cart">
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
            </Box>
          </Box>
        </Slide>
      )}
    </>
  );
};

export default ItemCount;
