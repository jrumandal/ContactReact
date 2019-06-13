import React from 'react';
import NameApp from '../NameApp/NameApp';
import SearchForm from '../SearchForm/SearchFrom';
import './Header.css';

class Header extends React.Component {
    render () {
        return (
        <div class="containerName">
            <NameApp/>
            <SearchForm/>
        </div>
        );
    }
}

export default Header;