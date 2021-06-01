import React from "react";
import PropTypes from "prop-types";

const TableContacts = ({ contactos }) => {
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
          return (
            <tr key={contact.id}>
              <th>{contact.id}</th>
              <td>{contact.name}</td>
              <td>{contact.numero}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
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
