import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SettingsSvg from '../../Assets/Svg/Settings-svg';
import ChevronSvg from '../../Assets/Svg/Chevron-svg';
import MoonSvg from '../../Assets/Svg/Moon-svg';
import SunSvg from '../../Assets/Svg/Sun-svg';
import LaptopSvg from '../../Assets/Svg/Laptop-svg';
import EN from '../../Assets/Images/us.png'
import PT from '../../Assets/Images/br.png'
import './Settings.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useContext, useEffect, useState } from 'react';
import CheckSvg from '../../Assets/Svg/Check-svg';
import { ThemeContext } from '../../Contexts/ThemeContext';

export default function Settings(){

    const [themeDefinition, setThemeDefinition] = useState(localStorage.getItem('@theme'))
    const [langDefinition, setLangDefinition] = useState(localStorage.getItem('@language'))
    const { ThemeColor, changeProviderTheme } = useContext(ThemeContext)

    const {t} = useTranslation()

    const changeLanguage = (lng:string) =>{
        localStorage.setItem('@language', lng)
        setLangDefinition(lng)
        i18next.changeLanguage(lng)
    }


    useEffect(()=>{
        const theme = localStorage.getItem('@theme')
        const language = localStorage.getItem('@language')

        if(theme == null){
            localStorage.setItem('@theme', 'dark')
        }else{
            changeTheme(theme)
        }

        if(language == null){
            localStorage.setItem('@language', 'pt')
        }else{
            changeLanguage(language)
        }
    },[])

    function changeTheme(theme:string){
        if (theme == 'dark' || theme == 'light'){
            localStorage.setItem('@theme', theme)
            setThemeDefinition(theme)
        }

        if(theme == 'dark'){
            changeProviderTheme('#194AFE')
        }

        if(theme == 'light'){
            changeProviderTheme('#8E66D1')
        }

        if (theme === 'system'){
            localStorage.setItem('@theme', theme)
            setThemeDefinition(theme)
            if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
                theme = 'dark'
            }else{
                theme = 'light'
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e =>{
                changeTheme(e.matches ? 'darkS' : 'lightS')
            })
        }

        if(theme == 'darkS'){
            theme = 'dark'
            changeProviderTheme('#194AFE')
        }

        if(theme == 'lightS'){
            theme = 'light'
            changeProviderTheme('#8E66D1')
        }

        document.querySelector('body')?.setAttribute('data-theme', theme)
    }

    return(
        <div>
            <DropdownMenu.Root >
                <DropdownMenu.Trigger asChild>
                    <button className='dropdown-button' >
                        <SettingsSvg />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content className='dropdown-content' >
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className='dropdown-subtrigger'>
                                <ChevronSvg/>
                                <h3 >{t('settings.tema')}</h3>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className='dropdown-subcontent'sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className='dropdown-item' onClick={() => changeTheme('dark')}>
                                        <>
                                        <MoonSvg/>
                                        <span>{t('settings.escuro')}</span>
                                        <CheckSvg  className='dropdown-check' style={themeDefinition == 'dark' || themeDefinition == null ? {display: 'block'} : {display: 'none'}}/>
                                        </>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className='dropdown-item' onClick={() => changeTheme('light')}>
                                        <>
                                        <SunSvg/>
                                        <span>{t('settings.claro')}</span>
                                        <CheckSvg className='dropdown-check'  style={themeDefinition == 'light' ? {display: 'block'} : {display: 'none'}}/>
                                        </>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className='dropdown-item' onClick={() => changeTheme('system')}>
                                        <>
                                        <LaptopSvg/>
                                        <span>{t('settings.sistema')}</span>
                                        <CheckSvg className='dropdown-check'  style={themeDefinition == 'system' ? {display: 'block'} : {display: 'none'}}/>
                                        </>
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className='dropdown-subtrigger'>
                                <ChevronSvg/>
                                <h3 >{t('settings.idioma')}</h3>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className='dropdown-subcontent'sideOffset={2} alignOffset={-5}>
                                    <DropdownMenu.Item className='dropdown-item ' onClick={() => changeLanguage('pt')}>
                                        <>
                                        <img src={PT} className='dropdown-item-img'/>
                                        <span>{t('settings.pt')}</span>
                                        <CheckSvg className='dropdown-check' style={langDefinition == 'pt' ? {display: 'block'} : {display: 'none'}}/>
                                        </>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className='dropdown-item ' onClick={() => changeLanguage('en')}>
                                        <>
                                        <img src={EN} className='dropdown-item-img' />
                                        <span>{t('settings.en')}</span>
                                        <CheckSvg className='dropdown-check' style={langDefinition == 'en' ? {display: 'block'} : {display: 'none'}}/>
                                        </>
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>

                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            
        </div>

    )
}
