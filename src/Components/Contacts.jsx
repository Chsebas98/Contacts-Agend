import { useEffect, useReducer, useState } from "react";
import { contactosReducer } from "../Reducers/contactosReducer";
import Formadd from "./Formadd";
import TableContacts from "./TableContacts";

const init = () => {
  const contactos = localStorage.getItem("contactos");
  return contactos ? JSON.parse(contactos) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(contactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formview, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formview)}
        className="btn btn-success"
      >
        {!formview ? "+Add Contact" : "Close Form"}
      </button>
      {formview && <Formadd dispatch={dispatch} />}

      <TableContacts dispatch={dispatch} contactos={state} />
    </div>
  );
};

export default Contacts;
