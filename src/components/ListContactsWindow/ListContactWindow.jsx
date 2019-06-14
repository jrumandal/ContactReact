import React from 'react';
import './ListContactWindow.css';
import BackButton from '../BackButton/BackButton';
import ListContact from '../ListContact/ListContact';

class ListContactWindow extends React.Component {
    render () {
    return (
        <div className="listWindow">                    
            <BackButton/>
            <ListContact/>
        </div>
        );
    }
}

export default ListContactWindow;