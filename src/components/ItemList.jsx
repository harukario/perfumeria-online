import Item from "./Item";

const ItemList = ({ datos }) => {
  return (
    <div className="itemContainer">
      {datos?.map((dato) => (
        <Item
          id={dato.id}
          key={dato.id}
          name={dato.nombre}
          price={dato.precio}
          picture={dato.imagen}
          stock={dato.stock}
          category={dato.categoria}
          presentacion={dato.presentacion}
          marca={dato.marca}
        />
      ))}
    </div>
  );
};

export default ItemList;
