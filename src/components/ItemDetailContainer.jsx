import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

import { Box } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const perfumesColeccion = collection(db, "perfumes");

    getDocs(perfumesColeccion).then((querySnapshot) => {
      const perfume = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDatos(perfume);
    });
  }, []);

  return (
    <Box bg="white" mt="6">
      <ItemDetail datosContainer={datos} />
    </Box>
  );
};

export default ItemDetailContainer;
