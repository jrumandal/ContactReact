import React from 'react';
import './WindowEditFormContact.css';
import EditFormContact from '../EditFormContact/EditFormContact';

class WindowEditFormContact extends React.Component {
    render(){
        return (
            <div className="editformWindow">
                <EditFormContact/>
            </div>
        );
    }
}

export default WindowEditFormContact;