import PropTypes from 'prop-types'
import * as React from 'react';
import SearchFunc from './SearchFunction'

const Search = ({}) => (

    <div className="search">
        <input onClick={SearchFunc} id='search_input' type='text' placeholder='Search..'/>
        
    </div>
)


export default Search