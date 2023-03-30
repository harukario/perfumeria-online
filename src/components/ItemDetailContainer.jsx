
import { useEffect, useState } from 'react';

import {collection, getDocs, getFirestore} from "firebase/firestore"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
   

    const [datos, setDatos] = useState ([]);

    useEffect(()=>{

        const db = getFirestore ();

        const perfumesColeccion = collection(db, "perfumes"); 

        getDocs(perfumesColeccion).then((querySnapshot)=>{  
          const perfume = querySnapshot.docs.map ((doc) =>({
            ...doc.data(),
            id:doc.id
          }));
          setDatos(perfume);
           });
    },[])

        
  return (
    
     <ItemDetail datosContainer={datos} />

  )
}

export default ItemDetailContainer