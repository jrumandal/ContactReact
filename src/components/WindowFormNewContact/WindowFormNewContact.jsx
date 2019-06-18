import React from 'react';
import './WindowFormNewContact.css';
import FormNewContact from '../FormNewContact/FormNewContact';

class WindowFormNewContact extends React.Component {

    render () {
        return (
            <div className="formWindow">
                <FormNewContact/>
            </div>
        );
    }
}
export default WindowFormNewContact;