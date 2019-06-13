import React from 'react';
import './NewButtonPannel.css';
import ButtonFormNewContact from '../ButtonFormNewContact/ButtonFormNewContact';

class NewButtonPannel extends React.Component {
    render () {
        return (
            <div className="btnPanel">
                <ButtonFormNewContact>
                    <ion-icon name="ios-close-circle-outline"></ion-icon>
                </ButtonFormNewContact>
                <ButtonFormNewContact>
                    <ion-icon name="ios-checkmark-circle"></ion-icon>
                </ButtonFormNewContact>
            </div>
        );
    }
}

export default NewButtonPannel;