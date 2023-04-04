import { useState } from "react";
import { useNavigate  } from "react-router-dom";

import {
  Input,
  Button,
  Box,
  Flex
} from "@chakra-ui/react";

const LogIn = () => {
  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [verificado, setVerificado] = useState(null);
  let navigateTo     = useNavigate();

  const nombreUsuario = "admin";
  const password = "abril2023";

  const verificacion = () => {
    if (nombre === nombreUsuario && pass === password) {
      setVerificado(true);
      navigateTo("/dataForm");
    } else {
      setVerificado(false);
      setNombre("");
      setPass ("")
    }
  };

  return (
    <Flex direction="column" alignItems="center" m="6rem">
          <Box mt="6" mb="6" fontSize="lg">  Registrese para continuar con la carga de datos </Box>
      
      <Box bg="white" rounded="xl" width="30rem" p="10">
        <Flex direction="column">
          <Box>
            Nombre usuario:
            <Input
              size="md"
              mt="2"
              mb="4"
              onChange={(e) => setNombre(e.target.value)}
            />
            Contaseña:
            <Input
              size="md"
              mt="2"
              mb="4"
              onChange={(e) => setPass(e.target.value)}
            />
          </Box>

          <Button
            m="10"
            bg="black"
            color="white"
            size="md"
            fontWeight="regular"
            onClick={verificacion} >
            Acceder
          </Button>

     {verificado == false && <Box>Datos incorrectos</Box>}
          
        </Flex>
      </Box>
      <Box m='6' color='grey'>usuario: {nombreUsuario} / password: {password}</Box>
    </Flex>
  );
};

export default LogIn;