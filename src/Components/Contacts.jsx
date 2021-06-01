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
      id: "hbbs",
      name: "Pamela",
      numero: "0996136062",
    },
    {
      id: "hbbs",
      name: "Lina",
      numero: "0940130062",
    },
    {
      id: "hbbs",
      name: "Samanta",
      numero: "0996230679",
    },
  ];
  return (
    <div className="container mt-3">
      <TableContacts contactos={contactos} />
    </div>
  );
};

export default Contacts;
