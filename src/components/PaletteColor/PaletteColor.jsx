import React from 'react';
import './PaletteColor.css';
import ButtonBlue from '../ButtonBlue/ButtonBlue';
import ButtonRed from '../ButtonRed/ButtonRed';
import ButtonYellow from '../ButtonYellow/ButtonYellow';
import ButtonPink from '../ButtonPink/ButtonPink';

class PaletteColor extends React.Component {
    render() {
        return (
            <div className="paletteColor">
                    <ButtonBlue/>
                    <ButtonRed/>
                    <ButtonYellow/>
                    <ButtonPink/>
                    <div className="colorId">B</div>
            </div>
        );
    }
}

export default PaletteColor;