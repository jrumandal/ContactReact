import React from 'react';
import './SureButtonPannel.css';
import SureButton from '../SureButton/SureButton'

class SureButtonPannel extends React.Component {
    render () {
        return (
            <div className="sureBtnPanel">
                <SureButton>
                    <ion-icon name="ios-close-circle-outline"></ion-icon>
                </SureButton>
                <SureButton>
                    <ion-icon name="ios-checkmark-circle"></ion-icon>
                </SureButton>
            </div>
        )
    }
}

export default SureButtonPannel;