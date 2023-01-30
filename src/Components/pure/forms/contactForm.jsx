import React,{useRef} from 'react';
import ProtoTypes from 'prop-types';
import { Contacts } from '../../../models/contact.class';

const ContactForm = ({add}) => {
    const nameRef=useRef('');
    const apellidoRef=useRef('');
    const telefonoRef=useRef('');
    const correoRef=useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contacts(
            nameRef.current.value,
            apellidoRef.current.value,
            telefonoRef.current.value,
            correoRef.current.value,
            true,
            'https://i1.wp.com/hoyenapple.com/wp-content/uploads/2018/12/Contactos.png?resize=1032%2C1031&ssl=1'

        );
        add(newContact)
    }

    return (
        <form  onSubmit={addContact} className='d-flex justify-content-center align-item-center mb-4'>
        <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre de Contacto' />
        <input ref={apellidoRef} id='inputApellido' type='text' className='form-control form-control-lg' required autoFocus placeholder='apellido de Contacto' />
        <input ref={telefonoRef} id='inputTelefono' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre de COntacto' />
        <input ref={correoRef} id='inputCorreo' type='text' className='form-control form-control-lg' required autoFocus placeholder='correo de COntacto' />




        </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>ADD</button>
        </form>
    );
}
ContactForm.protoType={
    add: ProtoTypes.func.isRequiered
}

export default ContactForm;
