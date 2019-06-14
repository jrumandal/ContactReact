import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SureDelete from './components/SureDelete/SureDelete';
import WindowFormNewContact from './components/WindowFormNewContact/WindowFormNewContact';
import WindowEditFormContact from './components/WindowEditFormContact/WindowEditFormContact';
import WindowFormColor from './components/WindowFormColor/WindowFormColor';
import WindowApp from './components/WindowApp/WindowApp';

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
        <WindowFormColor/>
        
                    {/* DIV DEL NOME DELLA APP E DELLA FUNZIONE RICERCA */}
        <Header/>
    
                                {/* CORPO DELLA APP */}                       
        <WindowApp/>
    </div>    
);
}

export default App;
