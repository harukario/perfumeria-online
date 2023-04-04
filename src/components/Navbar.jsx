import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import {Flex, Box, Button, MenuList, MenuButton, Menu, MenuItem} from "@chakra-ui/react";
import { ChevronDownIcon, LockIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Flex
        justifyContent="space-around"
        boxShadow="xl "
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="2"
        bg="white"
      >
        <Box>
          <Flex alignItems="center" justifyContent="left">
            <Box fontSize="3xl" fontWeight="bold" ml="1" p="6">
              <Link className="link" to={``}>
                <h1> Perfumia</h1>{" "}
              </Link>
            </Box>
          </Flex>
        </Box>

        <Flex p="4" justifyContent="flex-end" alignItems="center" mr="5rem">
          <Link to={``}>
            {" "}
            <Button variant="ghost" mr="4">
              {" "}
              Inicio
            </Button>{" "}
          </Link>
          <Link to={`/catalogue`}>
            <Button variant="ghost" mr="4">
              {" "}
              Productos
            </Button>
          </Link>

          <Menu>
            <MenuButton as={Button} bg="" rightIcon={<ChevronDownIcon />}>
              {" "}
              Fragancias
            </MenuButton>
            <MenuList>
              <Link to={`/category/${"femenina"}`}>
                {" "}
                <MenuItem>Femeninas</MenuItem>
              </Link>
              <Link to={`/category/${"masculina"}`}>
                {" "}
                <MenuItem>Masculinas</MenuItem>{" "}
              </Link>
              <Link to={`/category/${"premium"}`}>
                {" "}
                <MenuItem>Premium</MenuItem>{" "}
              </Link>
              <Link to={`/category/${"low"}`}>
                {" "}
                <MenuItem>Low Cost</MenuItem>{" "}
              </Link>
            </MenuList>
          </Menu>
          <Box pos="absolute" right="40">
            <CartWidget />{" "}
            <Link to = "/login" ><LockIcon /></Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
export default Navbar;
