import { CartContextShop } from "../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { collection, getFirestore, addDoc } from "firebase/firestore";


import { Input, Button, Select,Stack,Container, Radio, Box, Grid, GridItem, Image,Modal,ModalOverlay,ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure} from "@chakra-ui/react";

const Form = () => {
  const { cart, setCart, total, cartQuantity } = useContext(CartContextShop);

  const [cliente, setCliente] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [envio, setEnvio] = useState([]);
  const [pago, setPago] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  };

  const totalCompra = total();
  const fecha = new Date();
  const order = {
    cliente,
    envio,
    pago,
    totalCompra,
    fecha,
    items: cart.map((item) => ({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    })),
  };
  const orderCollection = collection(db, "compra");
  return (
    <Box minHeight="100rem" >
      <form onSubmit={handleSubmit}>
        <Grid
          templateAreas={`
        "header header"
        "form cart"`}
          gridTemplateRows={"40% ,60%"}
          h="200px"
          color="blackAlpha.900"
          fontWeight="light"
          bg="#F7FAFC"
        >
          <GridItem area={"header"} p="0" bg="#F7FAFC">
            <Box
              m="10"
              pl="24"
              fontSize="2xl"
              fontWeight="semi-bold"
              color="black"
            >
              <h2>FINALIZAR COMPRA</h2>
            </Box>
          </GridItem>
          |
          <GridItem area={"cart"} p="0" bg="#F7FAFC">
            <Container maxW="container.sm">
              <Box w="80%" p="6" bg="white" borderRadius="lg" m="6">
                <Box mt="3" mb="3" fontSize="xl">
                  {" "}
                  <h2> RESUMEN DE LA COMPRA</h2>{" "}
                </Box>
                <Box mt="3" mb="3" pl="3" color="grey">
                  {" "}
                  <span>{cartQuantity()} PRODUCTOS </span>{" "}
                </Box>
                {cart.map((prod) => (
                  <Box bg="white" borderRadius="lg" m="6" key={prod.id}>
                    <Grid
                      templateAreas={`
                                "img datos"`}
                      gridTemplateColumns={"20% 80%"}
                      borderTop="1px solid #E2E8F0"
                      p="1rem"
                    >
                      <GridItem area={"img"}>
                        <Box boxSize="4rem">
                          <Link className="link" to={`/item/${prod.id}`}>
                            {" "}
                            <Image src={prod.imagen} alt="Prod imagen" />{" "}
                          </Link>
                        </Box>
                      </GridItem>
                      <GridItem textAlign="right" area={"datos"}>
                        <Box fontSize="lg">{prod.nombre} </Box>
                        <Box fontSize="sm" color="grey">
                          {" "}
                          Cantidad: {prod.cantidad}{" "}
                        </Box>
                        <Box fontSize="lg">$ {prod.precio} </Box>
                      </GridItem>
                    </Grid>
                  </Box>
                ))}
                <Box
                  m="3"
                  p="10"
                  fontWeight="semibold"
                  fontSize="2xl"
                  textAlign="center"
                  borderTop="1px solid #E2E8F0"
                >
                  {" "}
                  <h3> Total: ${total()} </h3>{" "}
                </Box>
              </Box>
              <Box w="80%" p="6" textAlign="center" borderRadius="lg" m="6">
                <Button
                  onClick={onOpen}
                  bg="black"
                  color="white"
                  size="md"
                  type="submit"
                  fontWeight="regular"
                >
                  Confirmar compra
                </Button>
              </Box>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>¡Compra exitosa!</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    Tu compra se ha realizado con éxito. Nro de compra:{" "}
                    {orderId}
                  </ModalBody>

                  <ModalFooter>
                    <Link to="/catalogue">
                      {" "}
                      <Button
                        mr={3}
                        onClick={() => {
                          onClose();
                          cart && setCart([]);
                        }}
                      >
                        Volver
                      </Button>
                    </Link>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Container>
          </GridItem>
          <GridItem area={"form"} p="0" bg="#F7FAFC">
            <Container maxW="container.sm">
              <Box w="80%" p="6" bg="white" borderRadius="lg" m="6">
                <Box mt="3" mb="3" fontSize="xl">
                  {" "}
                  <h2>1. DATOS PERSONALES </h2>
                </Box>
                Nombre y apellido:
                <Input
                  size="md"
                  mt="2"
                  mb="4"
                  onChange={(e) =>
                    setCliente({ ...cliente, nombre: e.target.value })
                  }
                />
                Telefono:
                <Input
                  size="md"
                  mt="2"
                  mb="4"
                  onChange={(e) =>
                    setCliente({ ...cliente, telefono: e.target.value })
                  }
                />
                Email:
                <Input
                  size="md"
                  mt="2"
                  mb="4"
                  onChange={(e) =>
                    setCliente({ ...cliente, email: e.target.value })
                  }
                />
              </Box>

              <Box w="80%" p="6" bg="white" borderRadius="lg" m="6">
                <Box mt="3" mb="3" fontSize="xl">
                  <h2>2. DATOS DE ENVIO </h2>
                </Box>
                <Stack
                  size="md"
                  mt="2"
                  mb="4"
                  spacing={[1, 5]}
                  direction={["column", "row"]}
                >
                  <Radio
                    value="Envio a domicilio"
                    isChecked={envio.tipoEnvio === "envio a domicilio"}
                    onChange={(e) =>
                      setEnvio({ ...envio, tipoEnvio: "envio a domicilio" })
                    }
                  >
                    Envío a domicilio
                  </Radio>
                  <Radio
                    value="retiro"
                    isChecked={envio.tipoEnvio === "retira en sucursal"}
                    onChange={(e) =>
                      setEnvio({ ...envio, tipoEnvio: "retira en sucursal" })
                    }
                  >
                    Retiro en sucursal
                  </Radio>
                </Stack>
                Provincia:
                <Input
                  size="md"
                  mt="2"
                  mb="4"
                  onChange={(e) =>
                    setEnvio({ ...envio, provincia: e.target.value })
                  }
                />
                Localidad:
                <Input
                  size="md"
                  mt="2"
                  mb="4"
                  onChange={(e) =>
                    setEnvio({ ...envio, localidad: e.target.value })
                  }
                />
                Direccion:
                <Input
                  size="md"
                  mt="2"
                  mb="4"
                  onChange={(e) =>
                    setEnvio({ ...envio, direccion: e.target.value })
                  }
                />
              </Box>

              <Box w="80%" p="6" bg="white" borderRadius="lg" m="6">
                <Box mt="3" mb="3" fontSize="xl">
                  {" "}
                  <h2>3. PAGO </h2>{" "}
                </Box>
                <Stack spacing={3}>
                  <Select
                    placeholder="Forma de pago"
                    size="md"
                    mt="2"
                    mb="4"
                    fontWeight="light"
                    onChange={(e) =>
                      setPago({ ...pago, formaPago: e.target.value })
                    }
                  >
                    <option value="credito">Tarjeta de credito</option>
                    <option value="debito">Tarjeta de débito</option>
                    <option value="transferencia">Transferencia</option>
                  </Select>
                </Stack>
                Número tarjeta:
                <Input size="md" mt="2" mb="4" />
                Fecha de vencimiento:
                <Input
                  size="md"
                  mt="2"
                  mb="4"
                  fontWeight="light"
                  placeholder="Select Date and Time"
                  type="datetime-local"
                />
                Número que figura en el dorso:
                <Input size="md" mt="2" mb="4" />
                Nombre que figura en la tarjeta:
                <Input size="md" mt="2" mb="4" />
                DNI:
                <Input size="md" mt="2" mb="4" />
              </Box>
            </Container>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
