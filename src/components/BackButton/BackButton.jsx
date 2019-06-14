import React from 'react';
import './BackButton.css';

class BackButton extends React.Component {
    render () {
        return (
            <div className="bckButton">
                    <ion-icon name="ios-undo"></ion-icon>
            </div>
        );
    }
}

export default BackButton;