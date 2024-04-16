function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked).length;
  const itemString = items.length > 1 ? "items" : "item";
  const percentComplete =
    items.length > 0 ? ((completedItem / items.length) * 100).toFixed(2) : 0;
  return (
    <div className="text-center sticky-bottom">
      <p style={{ backgroundColor: "#0c2635", color: "white" }}>
        You have {items.length} {itemString} in your list and you already
        completed {completedItem}
      </p>
      <p style={{ color: "white" }}>{percentComplete}%</p>
    </div>
  );
}

export default Footer;
