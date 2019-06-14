import React from 'react';
import './PaletteColor.css';
import ButtonBlue from '../ButtonBlue/ButtonBlue';
import ButtonRed from '../ButtonRed/ButtonRed';
import ButtonYellow from '../ButtonYellow/ButtonYellow';
import ButtonPink from '../ButtonPink/ButtonPink';
import ColorId from '../ColorId/ColorId';

class PaletteColor extends React.Component {
    render() {
        return (
            <div className="paletteColor">
                    <ButtonBlue/>
                    <ButtonRed/>
                    <ButtonYellow/>
                    <ButtonPink/>
                    <ColorId/>
            </div>
        );
    }
}

export default PaletteColor;