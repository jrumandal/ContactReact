import React from 'react';
import './WindowFormColor.css';
import PaletteColor from '../PaletteColor/PaletteColor';

class WindowFormColor extends React.Component {
    render() {
        return (
            <div className="colorFormWindow">
                <PaletteColor/>
            </div>
        )
    }
}

export default WindowFormColor;