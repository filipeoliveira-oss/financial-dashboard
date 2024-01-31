import Settings from '../Settings/Settings'
import './Header.css'
import { useLocation } from "react-router-dom"

export default function Header(){

    const location = useLocation()

    return(
        <div className='header-container'>
            <div className='header-name'>
                <h3>Filipe Oliveira</h3>
            </div>
            <div className='header-options'>
                <a href='/' className={location.pathname == '/' ?'header-active header-option' :'header-inactive header-option'} ><h3>Carteira</h3></a>
                <a href='/daytrade' className={location.pathname == '/daytrade' ?'header-active header-option' :'header-inactive header-option'}><h3>Day trade</h3></a>
                <a href='/assets' className={location.pathname == '/assets' ?'header-active header-option' :'header-inactive header-option'}><h3>Ativos</h3></a>
                {/* <span className='header-svg'><SettingsSvg/></span> */}
                <Settings/>
            </div>
        </div>
    )
}