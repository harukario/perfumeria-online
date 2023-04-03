import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Text, Image, Flex, Box, Container, Tooltip } from "@chakra-ui/react";
const Item = ({ id, name, picture, stock, price, presentacion, marca }) => {
  return (
    <Box display="inline-block">
      <Container
        width="18rem"
        height="32rem"
        fontSize="md"
        bg="white"
        rounded="lg"
        boxShadow="md"
        fontWeight="thin"
        m="3"
        _hover={{ boxShadow: "dark-lg" }}
      >
        <Flex justifyContent="center">
          <Box p="2">
            <Link className="link" to={`/item/${id}`}>
              <Image
                maxW="14em"
                src={picture}
                alt="Product"
                borderRadius="lg"
              />

              <Box p="2" height="7rem" textAlign="center" fontSize="xl">
                <h1>{name}</h1>
                <Text color="grey" fontSize="md">
                  {marca}
                </Text>
                <Text fontSize="md">{presentacion}</Text>
              </Box>
              <Box textAlign="center">
                {" "}
                <Text fontSize="xl">
                  <b>${price}</b>
                </Text>
              </Box>
            </Link>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <ItemCount
            stock={stock}
            productName={name}
            price={price}
            picture={picture}
            id={id}
            idKey={id}
          />
        </Flex>
      </Container>
    </Box>
  );
};
export default Item;
