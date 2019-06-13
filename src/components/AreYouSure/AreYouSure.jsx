import React from 'react';
import './AreYouSure.css';
import SureFullName from '../SureFullName/SureFullName';
import SureIndex from '../SureIndex/SureIndex';
import SureNumber from '../SureNumber/SureNumber';
import SureButtonPannel from '../SureButtonPannel/SureButtonPannel';

class AreYouSure extends React.Component {
    render () {
        return (
            <div className="sureForm">
                    <SureIndex/>
                    <p>You are going to delete</p>
                    <SureFullName/>
                    <p>Phone Number</p>
                    <SureNumber/>
                    <p className="question">Are you sure?</p>
                    <SureButtonPannel/>
            </div>
        );
    }
}

export default AreYouSure;