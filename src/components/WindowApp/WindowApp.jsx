import React from 'react';
import './WindowApp.css';
import ListContactWindow from '../ListContactsWindow/ListContactWindow';
import ButtonChangeColor from '../ButtonChangeColor/ButtonChangeColor';
import ButtonNewContact from '../ButtonNewContact/ButtonNewContact';
import LetterFilterContainer from '../LetterFilterContainer/LetterFilterContainer';

class WindowApp extends React.Component {
    render() {
        return (
            <div className="windowApp">
                
                                {/* COLONNA DEL FILTRO PER INIZIALE NOME */}
                <LetterFilterContainer/>
                                   {/* FINESTRA LISTA CONTATTI */}
                <ListContactWindow/>

                                    {/* BOTTONE CHANGE COLOR */}
                <ButtonChangeColor/>
                                    {/* BOTTONE NEW CONTACT */}
                <ButtonNewContact/>
            </div>
        );
    }
}

export default WindowApp;