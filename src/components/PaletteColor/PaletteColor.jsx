import React from 'react';
import './PaletteColor.css';

class PaletteColor extends React.Component {
    render() {
        return (
            <div className="paletteColor">
                    <div id="palette" className="blue"></div>
                    <div id="palette" className="red"></div>
                    <div id="palette" className="yellow"></div>
                    <div id="palette" className="pink"></div>
                    <div className="colorId">B</div>
            </div>
        )
    }
}

export default PaletteColor;