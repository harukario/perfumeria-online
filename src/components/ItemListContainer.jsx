import React from "react";
import ItemList from "./ItemList";
import { Box } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemListContainer = ({ greetings }) => {
  const { category } = useParams();

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "perfumes");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDatos(docs);
    });
  }, []);

  const filtrar = datos.filter(
    (dato) => dato.categoria === category || dato.categoriaPrecio === category
  );

  return (
    <>
      <Box bg="#F7FAFC" p="4">
        {category ? <ItemList datos={filtrar} /> : <ItemList datos={datos} />}
      </Box>
    </>
  );
};

export default ItemListContainer;
