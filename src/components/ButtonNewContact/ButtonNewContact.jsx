import React from 'react';
import './ButtonNewContact.css';
import FormNewContact from '../FormNewContact/FormNewContact';
import './ButtonNewContact.css';

class ButtonNewContact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    };

    handleOpening = (open) => () => {
        this.setState({
            isOpen: open,
        });
    }
    render () {
        return (
            // potevo usare il div ma non sapevo se c'erano degli stili che sarebbero andati in conflitto
            <React.Fragment>
                <div className="btnNew" onClick={this.handleOpening(true)}>
                    <ion-icon name="ios-add-circle-outline"></ion-icon>
                </div>

                <div className={`windowFluttuante ${this.state.isOpen ? 'open': ''}`}>
                    <FormNewContact />

                    <button onClick={this.handleOpening(false)}>Close</button>
                </div>
            </React.Fragment>
            
        );
    }
}

export default ButtonNewContact;