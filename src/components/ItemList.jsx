import Item from "./Item";

const ItemList = ({ datos }) => {
  return (
    <div className="itemContainer">
      {datos?.map((dato) => (
        <Item
          id={dato.id}
          key={dato.id}
          nombre={dato.nombre}
          precio={dato.precio}
          imagen={dato.imagen}
          stock={dato.stock}
          categoria={dato.categoria}
          presentacion={dato.presentacion}
          marca={dato.marca}
        />
      ))}
    </div>
  );
};

export default ItemList;
