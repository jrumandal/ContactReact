import React from 'react';
import './FormNewContact.css';
import NewButtonPannel from '../NewButtonPannel/NewButtonPannel';

class FormNewContact extends React.Component {
    render () {
        return (
            <form name="newContactForm">
                    <label htmlFor="fName">Name</label>
                    <input type="text" id="fName" name="firstName"/>
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" id="lName" name="lastName"/>
                    <label htmlFor="pNumber">Phone Number</label>
                    <input type="text" id="pNumber" name="phoneNumber"/>
                    <NewButtonPannel/>
            </form> 
        );
    }
}

export default FormNewContact;