import React from "react";
import PropTypes from 'prop-types';

import { Contacts } from "../../models/contact.class";
import "../../styles/contactStyle.scss";

const Contact = ({ contact, changestado, deleteContact }) => {
  function estadoCheck() {
    if (contact.estado) {
      return (
        <h6 className="mb-0">
          <span className="badge bg-primary">Conectado</span>
        </h6>
      );
    } else {
        return (
      <h6 className="mb-0">
        <span className="badge bg-danger">Desconectado</span>
      </h6>);
    }
  }


  function ChengeEstado(){
    if (contact.estado) {
        
        return (
            <i
           onClick={()=>{
            changestado(contact)
           }}
            className="bi-toggle-on task-action"
            style={{ color: "green", fontWeight: "bold" }}
          ></i>
        );
      } else {
        return (
        <i
         onClick={()=>{
            changestado(contact)
           }}
          className="bi-toggle-off task-action"
          style={{ color: "grey", fontWeight: "bold" }}
        ></i>)
      }

  }
  return (
    <tr className="fw-normal">
      <th>
        <span>
          <img src={contact.image} className="img-circle" alt="..." />
        </span>

        {/* <span className="ms-2"> {contact.image}  </span> */}
      </th>
      <th>
        <span className="ms-2">
          {" "}
          {contact.name} {contact.apellido}
        </span>
      </th>
      <td className="align-middle">
        <span> {contact.telefono}</span>
      </td>
      <td className="align-middle">
        <span> {contact.correo}</span>
      </td>
      <td className="align-middle">
        <span> {estadoCheck()}</span>
        <span> {ChengeEstado()}</span>
      </td>
      <td className="align-middle">
        <i

        onClick={()=>{
            deleteContact(contact)
        }}
          className="bi-trash task-action"
          style={{ color: "tomato", fontSize: "20px" }}
        ></i>
      </td>
    </tr>
  );
};

Contacts.propTypes ={
    contact: PropTypes.instanceOf(Contacts).isRequerid,
    changestado: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,


};

export default Contact;
