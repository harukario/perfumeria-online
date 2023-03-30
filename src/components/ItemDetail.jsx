
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useParams } from 'react-router-dom';

const ItemDetail = ({datosContainer}) => {
    const { id } = useParams ();
    const [datos, setDatos] = useState ([]);

    useEffect(()=>{

        const db = getFirestore ();

        const perfumeRef = doc(db, "perfumes", `${id}`); 

        getDoc(perfumeRef).then((snapshot)=>{  
           if (snapshot.exists ()){
            setDatos(snapshot.data ());
           }
           else{
            console.log("No se encuentra el documento")
           }
	})
    },[])

    if (!datos) {
        return <div>Cargando detalle del perfume...</div>;
      }

const filtrarId = datosContainer.filter((dato)=> dato.id == id)

    return(
       <>
        {filtrarId.map ((dato) => (
            <div key={dato.id}  className='detailContainer'> 
            <div className="detailCard">
                <div>   <img className='detailImg' src={dato.imagen}></img>  </div>
                <div className="detailDataContainer"> 
                    <span> Fragancia {dato.categoria}</span>
                    <div className='detailName'> {(dato.nombre).toUpperCase()}</div>
                    <span className="detailPrice">${dato.precio}</span>
                    <div className="whiteSpace"></div>
                   <div>
                    
                    <ItemCount picture={dato.imagen} id={dato.id}stock={dato.stock} productName={dato.nombre} price={dato.precio} idKey={dato.id}/>
                    
                     </div>
                </div>  
           </div>
                <div className='detailDetail'>
                    <span className='detailName'>Detalles</span>
                    <div > {dato.descripcion} </div>
                </div>
                <div className='detailDetail'>
                    <span className='detailName'> Notas olfativas</span>
                    <div> {dato.notasOlfativas} </div>
                </div>

           </div>
           )
       )
        }
       </>  
    )
}

export default ItemDetail