import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SureDelete from './components/SureDelete/SureDelete';
import WindowFormNewContact from './components/WindowFormNewContact/WindowFormNewContact';
import WindowEditFormContact from './components/WindowEditFormContact/WindowEditFormContact';

function App() {
 return (
<div>
                                                            {/* FORM SICUREZZA DEL DELETE */}
    <SureDelete/>

                                                            {/* FORM PER NUOVO CONTATTO */}
    <WindowFormNewContact/>
                                                       {/* FORM PER MODIFICARE IL CONTATTO */}

    <WindowEditFormContact/>
    
                                                    {/* FORM PER CAMBIARE COLORE */}

    <div className="colorFormWindow">
        <div className="paletteColor">
            <div id="palette" className="blue"></div>
            <div id="palette" className="red"></div>
            <div id="palette" className="yellow"></div>
            <div id="palette" className="pink"></div>
            <div className="colorId">B</div>
        </div>
    </div>
                                            {/* DIV DEL NOME DELLA APP E DELLA FUNZIONE RICERCA */}
    <Header/>

                                                    {/* DIV DEL BODY DELLA APP */}                       
    <div className="windowApp">
                                                {/* DIV DEI BOTTONI FILTRO PER INIZIALE */}
        <div className="ltrNavBar">
            <div className="ltrLabel">A</div>
            <div className="ltrLabel">B</div>
            <div className="ltrLabel">C</div>
            <div className="ltrLabel">D</div>
            <div className="ltrLabel">E</div>
            <div className="ltrLabel">F</div>
            <div className="ltrLabel">G</div>
            <div className="ltrLabel">H</div>
            <div className="ltrLabel">I</div>
            <div className="ltrLabel">J</div>
            <div className="ltrLabel">K</div>
            <div className="ltrLabel">L</div>
            <div className="ltrLabel">M</div>
            <div className="ltrLabel">N</div>
            <div className="ltrLabel">O</div>
            <div className="ltrLabel">P</div>
            <div className="ltrLabel">Q</div>
            <div className="ltrLabel">R</div>
            <div className="ltrLabel">S</div>
            <div className="ltrLabel">T</div>
            <div className="ltrLabel">U</div>
            <div className="ltrLabel">V</div>
            <div className="ltrLabel">W</div>
            <div className="ltrLabel">X</div>
            <div className="ltrLabel">Y</div>
            <div className="ltrLabel">Z</div>
        </div>
                                                    {/* FINESTRA LISTA CONTATTI */}
        <div className="listWindow">                    
            <div className="bckButton">
                    <ion-icon name="ios-undo"></ion-icon>
            </div>
            <div className="contactListWindow"></div> 
        </div>

                                                        {/* BOTTONE EDIT E NEW */}
        <div className="btnColor">
                <ion-icon name="ios-brush"></ion-icon>
        </div>
        <div className="btnNew">
                <ion-icon name="ios-add-circle-outline"></ion-icon>
        </div>
    </div>
</div>    
);
}

export default App;
