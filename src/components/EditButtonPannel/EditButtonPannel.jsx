import React from 'react';
import './EditButtonPannel.css';
import ButtonFormEditContact from '../ButtonFormEditContact/ButtonFormEditContact';

class EditButtonPannel extends React.Component {
    render () {
    return (
        <div className="editBtnPanel">
            <ButtonFormEditContact>
                <ion-icon name="ios-close-circle-outline"></ion-icon>
            </ButtonFormEditContact>
            <ButtonFormEditContact>
                <ion-icon name="ios-checkmark-circle"></ion-icon>
            </ButtonFormEditContact>
        </div>
    );
    }
}

export default EditButtonPannel;