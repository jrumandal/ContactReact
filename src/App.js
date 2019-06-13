import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
 return (
<div>
                                                            {/* FORM SICUREZZA DEL DELETE */}
    <div class="sureWindow">
        <div class="sureForm">
            <div class="indexDel"></div>
            <p>You are going to delete</p>
            <div class="sureFullName"></div>
            <p>Phone Number</p>
            <div class="surePhone"></div>
            <p class="question">Are you sure?</p>
            <div class="sureBtnPanel">
                    <div class="sureBtn">
                        <ion-icon name="ios-close-circle-outline"></ion-icon>
                    </div>
                    <div class="sureBtn">
                        <ion-icon name="ios-checkmark-circle"></ion-icon>
                    </div>
            </div>
        </div>
    </div>    
                                                            {/* FORM PER NUOVO CONTATTO */}
    <div class="formWindow">
        <form name="newContactForm">
            <label for="fName">Name</label>
            <input type="text" id="fName" name="firstName"/>
            <label for="lName">Last Name</label>
            <input type="text" id="lName" name="lastName"/>
            <label for="pNumber">Phone Number</label>
            <input type="text" id="pNumber" name="phoneNumber"/>
            <div class="btnPanel">
                <div class="btn">
                    <ion-icon name="ios-close-circle-outline"></ion-icon>
                </div>
                <div class="btn">
                    <ion-icon name="ios-checkmark-circle"></ion-icon>
                </div>
            </div>
        </form> 
    </div>
                                                       {/* FORM PER MODIFICARE IL CONTATTO */}

    <div class="editformWindow">
        <form name="editContactForm">
            <div class="idContact"></div>
            <label for="editfName">Name</label>
            <input type="text" id="editfName" name="editfirstName"/>
            <label for="editlName">Last Name</label>
            <input type="text" id="editlName" name="editlastName"/>
            <label for="editpNumber">Phone Number</label>
            <input type="text" id="editpNumber" name="editphoneNumber"/>
            <div class="editBtnPanel">
                <div class="editBtn">
                    <ion-icon name="ios-close-circle-outline"></ion-icon>
                </div>
                <div class="editBtn">
                    <ion-icon name="ios-checkmark-circle"></ion-icon>
                </div>
            </div>
        </form> 
    </div>

                                                    {/* FORM PER CAMBIARE COLORE */}

    <div class="colorFormWindow">
        <div class="paletteColor">
            <div id="palette" class="blue"></div>
            <div id="palette" class="red"></div>
            <div id="palette" class="yellow"></div>
            <div id="palette" class="pink"></div>
            <div class="colorId">B</div>
        </div>
    </div>
                                            {/* DIV DEL NOME DELLA APP E DELLA FUNZIONE RICERCA */}
    <Header/>
{/*    <div class="containerName">
        <div class="nameApp">CONTACTS</div>
        <div class="frmSearch">
            <div class="iconSearch">
                <ion-icon name="ios-search"></ion-icon>
            </div>
            <input type="search" id="search" name="searchInput"/>
        </div>
 </div> */}
                           
    <div class="windowApp">
                                                {/* DIV DEI BOTTONI FILTRO PER INIZIALE */}
        <div class="ltrNavBar">
            <div class="ltrLabel">A</div>
            <div class="ltrLabel">B</div>
            <div class="ltrLabel">C</div>
            <div class="ltrLabel">D</div>
            <div class="ltrLabel">E</div>
            <div class="ltrLabel">F</div>
            <div class="ltrLabel">G</div>
            <div class="ltrLabel">H</div>
            <div class="ltrLabel">I</div>
            <div class="ltrLabel">J</div>
            <div class="ltrLabel">K</div>
            <div class="ltrLabel">L</div>
            <div class="ltrLabel">M</div>
            <div class="ltrLabel">N</div>
            <div class="ltrLabel">O</div>
            <div class="ltrLabel">P</div>
            <div class="ltrLabel">Q</div>
            <div class="ltrLabel">R</div>
            <div class="ltrLabel">S</div>
            <div class="ltrLabel">T</div>
            <div class="ltrLabel">U</div>
            <div class="ltrLabel">V</div>
            <div class="ltrLabel">W</div>
            <div class="ltrLabel">X</div>
            <div class="ltrLabel">Y</div>
            <div class="ltrLabel">Z</div>
        </div>
                                                    {/* FINESTRA LISTA CONTATTI */}
        <div class="listWindow">                    
            <div class="bckButton">
                    <ion-icon name="ios-undo"></ion-icon>
            </div>
            <div class="contactListWindow"></div> 
        </div>

                                                        {/* BOTTONE EDIT E NEW */}
        <div class="btnColor">
                <ion-icon name="ios-brush"></ion-icon>
        </div>
        <div class="btnNew">
                <ion-icon name="ios-add-circle-outline"></ion-icon>
        </div>
    </div>
</div>    
);
}

export default App;
