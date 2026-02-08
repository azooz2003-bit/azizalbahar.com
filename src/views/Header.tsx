
import dropdown from '../icons/caret-down-outline.svg'
import { useState } from 'react';
import '../styles/Header.css';

export default function Header() {
    let [dropdownClicked, setDropdownClicked] = useState(false)

    function toggleDropdown() {
        setDropdownClicked(!dropdownClicked)
    }

    return (
        <>
            <div className='Top-bar' >
                <img onClick={toggleDropdown} src= {dropdown} className='Arrow' />
                <h1 className='Title'> Aziz Albahar </h1>
            </div>
        </>
    )
}
