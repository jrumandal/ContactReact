import React from 'react';
import './EditFormContact.css';
import EditButtonPannel from '../EditButtonPannel/EditButtonPannel';

class EditFormContact extends React.Component {
    render() {
        return (
            <form name="editContactForm">
                <div className="idContact"></div>
                <label htmlFor="editfName">Name</label>
                <input type="text" id="editfName" name="editfirstName"/>
                <label htmlFor="editlName">Last Name</label>
                <input type="text" id="editlName" name="editlastName"/>
                <label htmlFor="editpNumber">Phone Number</label>
                <input type="text" id="editpNumber" name="editphoneNumber"/>
                <EditButtonPannel/>
            </form> 
        );
    }
}

export default EditFormContact;