import React from 'react';
import AreYouSure from '../AreYouSure/AreYouSure'
import './SureDelete.css';

class SureDelete extends React.Component {
    render () {
        return (
            <div className="sureWindow">
                <AreYouSure/>
            </div>
        );
    }
}

export default SureDelete