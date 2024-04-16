import Item from "./Item";
function ItemList1({ items, onDelete, onToggleChecked }) {
  return (
    <div className="">
      <ul>
        {items.map((item) => (
          <Item
            itemObj={item}
            key={item.name}
            onDelete={() => onDelete(item.id)}
            onToggleChecked={() => onToggleChecked(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList1;
