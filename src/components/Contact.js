// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = (props) => {
    const { name, phone, email, photo } = props.data;
    return (
        <div className='contact'>
            <img src={photo} className='img-contact' alt='contact'></img>
            <div className='contact-info'>
                <p className='nameContact'>{name}</p>
                <p className='phoneContact'>{phone}</p>
                <p className='emailContact'>{email}</p>
            </div>
        </div>
    )
}

export default Contact;