
import { useState } from "react";

import { collection, getFirestore, addDoc } from "firebase/firestore";

import { Input, Button, Box, Modal,ModalOverlay,ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure} from "@chakra-ui/react";

const DataForm = () => {
      const [nombre, setNombre] = useState("");
      const [marca, setMarca] = useState("");
      const [presentacion, setPresentacion] = useState("");
      const [descripcion, setDescripcion] = useState("");
      const [notasOlfativas, setNotasOlfativas] = useState("");
      const [imagen, setImagen] = useState("");
      const [categoria, setCategoria] = useState("");
      const [categoriaPrecio, setCategoriaPrecio] = useState("");
      const [precio, setPrecio] = useState("");
      const [stock, setStock] = useState("");

     const [CargaId, setCargaId] = useState(null);


const { isOpen, onOpen, onClose } = useDisclosure();

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(perfumesCollection, cargaDatos).then(({ id }) => setCargaId(id));
  };


  const cargaDatos = {
    nombre, marca, presentacion, precio, stock, descripcion, notasOlfativas, categoria, categoriaPrecio, imagen
  };

  const perfumesCollection = collection(db, "perfumes");

  const vaciarInputs = () => {
    setNombre("");
    setMarca("");
    setPresentacion("");
    setPrecio("");
    setStock("");
    setDescripcion("");
    setNotasOlfativas("");
    setImagen("");
    setCategoria("");
    setCategoriaPrecio("");
  }; 
  return (
    <form onSubmit={handleSubmit}>
      <Box w="80%" p="6"mt='4rem' ml='8rem' fontSize="2xl" fontWeight='light'>
            {" "}
            <h2>CARGA DE DATOS </h2>
        </Box>
        <Box w="80%" p="6" bg="white" borderRadius="lg" ml='8rem'>  
      Nombre producto:
        <Input
            size="md"
            mt="2"
            mb="4"
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value )
              }
          />

      Marca:
        <Input
          size="md"
          mt="2"
          mb="4"
          value={marca}
          onChange={(e) =>
              setMarca(e.target.value )
          }
        />

      Presentacion:
        <Input
          size="md"
          mt="2"
          mb="4"
          value={presentacion}
          onChange={(e) =>
              setPresentacion(e.target.value )
          }
        />

      Precio:
        <Input
          type="number"
          size="md"
          mt="2"
          mb="4"
          value={precio}
          onChange={(e) =>
              setPrecio(+e.target.value )
          }
        />

      Stock:
        <Input
            type="number"
            size="md"
            mt="2"
            mb="4"
            value={stock}
            onChange={(e) =>
              setStock(+e.target.value )
              }
          />
      Descripcion:
        <Input
          size="md"
          mt="2"
          mb="4"
          value={descripcion}
          onChange={(e) =>
              setDescripcion(e.target.value )
          }
        />

      Notas olfativas:
        <Input
          size="md"
          mt="2"
          mb="4"
          value={notasOlfativas}
          onChange={(e) =>
              setNotasOlfativas(e.target.value )
          }
        />
      Imagen (link):
        <Input
          size="md"
          mt="2"
          mb="4"
          value={imagen}
          onChange={(e) =>
              setImagen(e.target.value )
          }
        />

      Categoria (femenina, masculina):
        <Input
          size="md"
          mt="2"
          mb="4"
          value={categoria}
          onChange={(e) =>
              setCategoria(e.target.value )
          }
        />

    Categoria precio (premium, low):
        <Input
          size="md"
          mt="2"
          mb="4"
          value={categoriaPrecio}
          onChange={(e) =>
              setCategoriaPrecio(e.target.value )
          }
        />
      </Box>

    {nombre && marca && presentacion && descripcion && notasOlfativas && imagen && categoria && categoriaPrecio && precio && stock !== "" ? (
        <Button m='10' bg="black" color="white" size="md" type="submit" fontWeight="regular" onClick={onOpen}> Cargar producto </Button>
        ) : (
        <Box p='10' ml='8rem' color='red'>Debes completar todos los campos</Box>
    )}
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                    <ModalContent>
                     <ModalHeader>Carga exitosa</ModalHeader>
                     <ModalCloseButton onClick={vaciarInputs}/>
                  <ModalBody>
                  ID producto:
                    {CargaId}
                  </ModalBody>

                </ModalContent>
              </Modal>
    </form>
  )
}

export default DataForm