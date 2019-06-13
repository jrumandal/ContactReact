import React from 'react';
import ButtonSearch from '../ButtonSearch/ButtonSearch';
import InputSearch from '../InputSearch/InputSearch';
import './SearchForm.css';

class SearchForm extends React.Component {
    render () {
        return (
        <div class="frmSearch">
                <ButtonSearch/>
                <InputSearch/>
        </div>
        );
    }
}

export default SearchForm;