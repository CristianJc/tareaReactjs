import React, {useState} from 'react';
import { Contacts } from '../../models/contact.class';
import Contact from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
const ContactListCompent = () => {

    const DefaultContact1 = new Contacts(
       'Cristian',
       'Cumplido',
       '3177408400',
       'smcumpli@gmail.com',
        true,
        'https://i1.wp.com/hoyenapple.com/wp-content/uploads/2018/12/Contactos.png?resize=1032%2C1031&ssl=1'
    );
    const DefaultContact2 = new Contacts(
        'Eduardo ',
        'Mendoza',
        '3128465263',
        'mendozaEdu@gmail.com',
        false,
        'https://i1.wp.com/hoyenapple.com/wp-content/uploads/2018/12/Contactos.png?resize=1032%2C1031&ssl=1'
     );

     const [contacts, setContacts] = useState([DefaultContact1,DefaultContact2]);

     function cambiarEstado(contact){

        const index=contacts.indexOf(contact);
        const tempContactList=[...contacts];
        tempContactList[index].estado=!tempContactList[index].estado;
        setContacts(tempContactList);
     }

        function elimiarContacto(contact){
            const index=contacts.indexOf(contact);
            const tempContactList=[...contacts];
            tempContactList.splice(index,1);
            setContacts(tempContactList);
     }

     function addContact(contact){
      const index=contacts.indexOf(contact);
      const tempContactList=[...contacts];
      tempContactList.push(contact);
      setContacts(tempContactList);

     }
    return (
        <div>
            <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          {/* /**contendio de la tarjeta */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table className='table  table-striped'>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Eliminar</th>
                  
                </tr>
              </thead>
              <tbody>
        {contacts.map((contact, index)=>{
            return(
                <Contact key={index} contact={contact} changestado={cambiarEstado} deleteContact={elimiarContacto} >

                </Contact>
            );
        })}
              </tbody>
            </table>
          </div>
        </div>
        </div>
        <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactListCompent;
