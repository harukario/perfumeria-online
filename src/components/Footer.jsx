import { EditIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      borderTop="1px solid #A0AEC0"
      h="10rem"
      m="8rem"
      mb="0"
      fontWeight="light"
      fontSize="xl"
      color="grey"
      textAlign="center"
      p="10"
    >
      <EditIcon />
      <Text p="3">Valentina Illanes </Text>
    </Box>
  );
}

export default Footer;
