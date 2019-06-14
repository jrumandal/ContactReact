import React from 'react';
import './LetterFilterContainer.css';
import LetterLabel from '../LetterLabel/LetterLabel'

class LetterFilterContainer extends React.Component {
    render() {
        let x;
        let letterList = [];
        for (let i = 65; i < 91; i++) {
            x = String.fromCharCode(i);
            letterList.push(<LetterLabel>x</LetterLabel>);
        }
        return (
            <div className="ltrNavBar">
                {letterList}
            </div>
        );
    }
}

export default LetterFilterContainer;