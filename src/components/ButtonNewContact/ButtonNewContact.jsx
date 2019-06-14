import React from 'react';
import './ButtonNewContact.css';

class ButtonNewContact extends React.Component {
    render () {
        return (
            <div className="btnNew">
                <ion-icon name="ios-add-circle-outline"></ion-icon>
            </div>
        );
    }
}

export default ButtonNewContact;