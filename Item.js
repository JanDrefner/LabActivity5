function Item({ itemObj, onDelete, onToggleChecked }) {
  const handleDelete = () => {
    onDelete(itemObj.id);
  };

  return (
    <div
      className="container rounded-pill py-3 mt-3 text-white"
      style={{ height: "70px", width: "250px", backgroundColor: "#15384B" }}
    >
      <div
        className="row align-items-center d-flex justify-content-center rounded-pill"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="col-auto text-center"
          style={{ backgroundColor: "transparent" }}
        >
          {itemObj.quantity}
        </div>
        <div
          className="col text-center"
          style={{ backgroundColor: "transparent" }}
        >
          {itemObj.name}
        </div>
        <div className="col-auto" style={{ backgroundColor: "transparent" }}>
          <button
            className="btn rounded-pill text-white"
            style={{ backgroundColor: "#0c2635" }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            className="btn rounded-pill mx-1 text-white"
            style={{ backgroundColor: "#0c2635" }}
            onClick={onToggleChecked}
          >
            {itemObj.isChecked ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-check"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
