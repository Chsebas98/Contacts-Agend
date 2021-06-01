const Formadd = ({ dispatch }) => {
  const actionAdd = {
    type: "add",
    payload: {
      id: "123",
      name: "Diane",
      numero: "0948732106",
    },
  };

  const handleadd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre:{" "}
          <input
            type="text"
            className="form-control"
            autoComplete="off"
          ></input>
        </label>
        <label className="mx-1 d-grid gap-2">
          Numero:{" "}
          <input
            type="text"
            cla
            ssName="form-control"
            autoComplete="off"
          ></input>
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleadd} className="brn btn-info mt-1">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Formadd;
