import React from 'react';
import './LetterLabel.css';

class LetterLabel extends React.Component {

    render() {
        return (
            <div className="ltrLabel">{this.props.letter}</div>
        );
    }
}

export default LetterLabel;