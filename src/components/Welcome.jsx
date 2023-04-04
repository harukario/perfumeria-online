import {
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";

import ImageSlider from "./ImageSlider";
import { SlideData } from "./Slidedata";

const Welcome = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box mt="6" w="80%" p={4} color="white">
          <ImageSlider slides={SlideData} />
        </Box>
      </Flex>

      <Flex flexDirection="row" justifyContent="space-between" p="6" bg="white">
        <Box fontWeight="light">
          <Flex flexDirection="column" alignItems="center">
            <Image src="src/assets/cuota.png" />
            <Box textAlign="center" w="14rem">
              Visa, Master y Amex Planes Ahora 3 y Ahora 6{" "}
            </Box>{" "}
          </Flex>
        </Box>

        <Box fontWeight="light">
          <Flex flexDirection="column" alignItems="center">
            <Image src="src/assets/banco1.png" />
            <Box textAlign="center" w="14rem">
              -10% por reintegro 3 cuotas s/interés{" "}
            </Box>{" "}
          </Flex>
        </Box>

        <Box fontWeight="light">
          <Flex flexDirection="column" alignItems="center">
            <Image src="src/assets/banco2.png" />
            <Box textAlign="center" w="14rem">
              -10% por reintegro en 1, Z o 6 cuotas ó 10 cuotas s/interés
            </Box>{" "}
          </Flex>
        </Box>

        <Box fontWeight="light">
          <Flex flexDirection="column" alignItems="center">
            <Image src="src/assets/banco3.png" />
            <Box textAlign="center" w="14rem">
              -10% por reintegro 3 cuotas s/interés{" "}
            </Box>{" "}
          </Flex>
        </Box>

        <Box fontWeight="light">
          <Flex flexDirection="column" alignItems="center">
            <Image src="src/assets/banco4.png" />
            <Box textAlign="center" w="14rem">
              -10% por reintegro 3 cuotas s/interés{" "}
            </Box>{" "}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Welcome;
