import React from 'react';
import './LetterFilterContainer.css';
import LetterLabel from '../LetterLabel/LetterLabel';

class LetterFilterContainer extends React.Component {
    render() {
        let Labels = [];
        let x;
        for (let i=65; i < 91; i++) {
            x  = String.fromCharCode(i);
            Labels.push(<LetterLabel key={x} letter={x}></LetterLabel>);
        }
        return (
            <div className="ltrNavBar">
                {Labels}
            </div>
        );
    }
}

export default LetterFilterContainer;