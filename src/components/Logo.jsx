import React from 'react'
import Ordenador from '../img/ordenador.png'

import './Logo.css'

const Logo = () => {
    return (
        <div className="logo">
                <img src={Ordenador} alt="icono logo" className='logo-icon' />
                <a href="#home">
                    <h4 className='logo-name'>Leandro <span>Palacios</span></h4>
                </a>
        </div>
    )
}

export default Logo
