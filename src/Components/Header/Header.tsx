import Settings from '../Settings/Settings'
import './Header.css'
import { useLocation } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import '../../Utils/i18n/i18n.ts'

export default function Header(){

    const location = useLocation()
    const {t} = useTranslation()

    return(
        <div className='header-container'>
            <div className='header-name'>
                <h3>Filipe Oliveira</h3>
            </div>
            <div className='header-options'>
                <a href='/' className={location.pathname == '/' ?'header-active header-option' :'header-inactive header-option'} ><h3>{t('header.carteira')}</h3></a>
                <a href='/daytrade' className={location.pathname == '/daytrade' ?'header-active header-option' :'header-inactive header-option'}><h3>{t('header.daytrade')}</h3></a>
                <a href='/assets' className={location.pathname == '/assets' ?'header-active header-option' :'header-inactive header-option'}><h3>{t('header.ativos')}</h3></a>
                <Settings/>
            </div>
        </div>
    )
}