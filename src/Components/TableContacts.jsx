import React from "react";
import PropTypes from "prop-types";

const TableContacts = ({ contactos = [], dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Número</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contact) => {
          const finalId = contact.id.split("-");
          return (
            <tr key={contact.id}>
              <th>{finalId[0]}</th>
              <td>{contact.name}</td>
              <td>{contact.numero}</td>
              <td>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TableContacts.propTypes = {
  contactos: PropTypes.array,
};

export default TableContacts;
