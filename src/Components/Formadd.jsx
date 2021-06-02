import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const Formadd = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });
  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      name: "Diane",
      numero: "0948732106",
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Nombre:{" "}
          <input
            onChange={handleChange}
            type="text"
            name="nombre"
            value={nombre}
            className="form-control"
            autoComplete="off"
          ></input>
        </label>
        <label className="mx-1 d-grid gap-2">
          Numero:{" "}
          <input
            onChange={handleChange}
            type="text"
            name="numero"
            value={numero}
            cla
            ssName="form-control"
            autoComplete="off"
          ></input>
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="brn btn-info mt-1">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Formadd;
