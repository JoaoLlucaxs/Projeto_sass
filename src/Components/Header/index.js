import {NavLink} from 'react-router-dom'

const Header=()=>{
    return(
        <nav className="header">
            <ul>
                <li>
                    <NavLink className='link' to='/' end>Produtos</NavLink>
                </li>
                <li>
                <NavLink className='link' to='contact'>Contato</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
