import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

import {
  Flex,
  Box,
  Container,
  Img,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const ItemDetail = ({ datosContainer }) => {
  const { id } = useParams();
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const perfumeRef = doc(db, "perfumes", `${id}`);

    getDoc(perfumeRef).then((snapshot) => {
      if (snapshot.exists()) {
        setDatos(snapshot.data());
      } else {
        console.log("No se encuentra el documento");
      }
    });
  }, []);

  const filtrarId = datosContainer.filter((dato) => dato.id == id);

  return (
    <>
      {filtrarId.map((dato) => (
        <Box key={dato.id}>
          <Box
            w="100%"
            h="16"
            color="white"
            fontSize="4xl"
            p="2"
            textAlign="center"
            bg='black'
          >
            <h1> {dato.marca.toUpperCase()}</h1>
          </Box>

          <Box>
            <Breadcrumb fontWeight="light" fontSize="md" m="6" p="3">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/catalogue">Productos</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                {dato.categoriaPrecio == "premium" ? (
                  <BreadcrumbLink href="/category/premium">
                    Fragancia {dato.categoriaPrecio}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink href="/category/low">Low Cost</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              <BreadcrumbItem>
                {dato.categoria == "femenina" ? (
                  <BreadcrumbLink href="/category/femenina">
                    Fragancia {dato.categoria}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink href="/category/masculina">
                    Fragancia {dato.categoria}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">{dato.nombre}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>


          <Flex display="row" alignItems="center" key={dato.id}>
            <Container minWidth="62em" mt="1rem" maxHeight="40rem">
              <Flex justifyContent="center">
                <Box maxHeight="36rem" width="30rem" bg="white" rounded="xl">
                  <Img maxHeight="48em" src={dato.imagen}></Img>
                </Box>

                <Box
                  bg="#F7FAFC"
                  maxHeight="34rem"
                  width="30rem"
                  fontSize="xl"
                  fontWeight="thin"
                  rounded="xl"
                  p="6"
                >
                  <Flex flexDirection="column" alignItems="center" >
                    <Box fontSize="lg" mb="4rem">
                      {" "}
                      Fragancia {dato.categoria}
                    </Box>
                    <Box fontSize="2xl">
                      {" "}
                      <h1>{dato.nombre.toUpperCase()}</h1>
                    </Box>
                    <Box fontSize="lg" color="grey">
                      {" "}
                      {dato.marca}
                    </Box>
                    <Box fontSize="lg" color="grey">
                      {" "}
                      {dato.presentacion}
                    </Box>
                    <Box mt="2rem" fontSize="3xl" fontWeight="bold">
                      ${dato.precio}
                    </Box>
                    <Box mt="2rem" width="26rem" borderTop="1px solid #A0AEC0">
                      {" "}
                    </Box>
                    <Box mt="2rem">
                      <ItemCount
                        imagen={dato.imagen}
                        id={dato.id}
                        stock={dato.stock}
                        nombre={dato.nombre}
                        precio={dato.precio}
                      />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Container>

            <Box
              m="28"
              maxHeight="40rem"
              border="1px solid #A0AEC0"
              rounded="xl"
            >
              <Flex flexDirection="row">
                <Box
                  p="6"
                  width="50em"
                  bg="white"
                  m="6"
                  borderRight="1px solid #A0AEC0"
                >
                  <Box mb="4" fontWeight="bold" fontSize="2xl">
                    DETALLES
                  </Box>
                  <Box fontWeight="light"> {dato.descripcion} </Box>
                </Box>
                <Box p="6" width="50em" bg="white" m="6">
                  <Box mb="4" fontWeight="bold" fontSize="2xl">
                    {" "}
                    NOTAS OLFATIVAS
                  </Box>
                  <Box fontWeight="light"> {dato.notasOlfativas} </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  );
};
export default ItemDetail;
