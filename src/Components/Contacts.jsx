import { useReducer } from "react";
import { contactosReducer } from "../Reducers/contactosReducer";
import Formadd from "./Formadd";
import TableContacts from "./TableContacts";

const Contacts = () => {
  const contactos = [
    {
      id: "hbbs",
      name: "Sebastian",
      numero: "0996230062",
    },
    {
      id: "hbbssa",
      name: "Lucas",
      numero: "0970130062",
    },
    {
      id: "hbb1s",
      name: "Pamela",
      numero: "0996136062",
    },
    {
      id: "h2bbs",
      name: "Luna",
      numero: "0940130062",
    },
    {
      id: "hb3bs",
      name: "Samanta",
      numero: "0996230679",
    },
  ];

  const [state, dispatch] = useReducer(contactosReducer, contactos);
  return (
    <div className="container mt-3">
      <Formadd dispatch={dispatch} />
      <TableContacts contactos={state} />
    </div>
  );
};

export default Contacts;
