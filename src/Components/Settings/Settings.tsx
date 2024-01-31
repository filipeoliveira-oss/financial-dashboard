import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SettingsSvg from '../../Assets/Svg/Settings-svg';
import ChevronSvg from '../../Assets/Svg/Chevron-svg';
import MoonSvg from '../../Assets/Svg/Moon-svg';
import SunSvg from '../../Assets/Svg/Sun-svg';
import LaptopSvg from '../../Assets/Svg/Laptop-svg';
import EN from '../../Assets/Images/us.png'
import PT from '../../Assets/Images/br.png'
import './Settings.css'

export default function Settings(){


    return(
        <div >
            <DropdownMenu.Root >
                <DropdownMenu.Trigger asChild>
                    <button className='dropdown-button'  >
                        <SettingsSvg />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                    <DropdownMenu.Content className='dropdown-content' >
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className='dropdown-subtrigger'>
                                <ChevronSvg/>
                                <h3 >Tema</h3>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className='dropdown-subcontent'sideOffset={2} alignOffset={-5} >
                                    <DropdownMenu.Item className='dropdown-item'>
                                        <>
                                        <MoonSvg/>
                                        <span>Escuro</span>
                                        </>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className='dropdown-item'>
                                        <>
                                        <SunSvg/>
                                        <span>Claro</span>
                                        </>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className='dropdown-item'>
                                        <>
                                        <LaptopSvg/>
                                        <span>Sistema</span>
                                        </>
                                    </DropdownMenu.Item>
                                </DropdownMenu.SubContent>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Sub>
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger className='dropdown-subtrigger'>
                                <ChevronSvg/>
                                <h3 >Idioma</h3>
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.Portal>
                                <DropdownMenu.SubContent className='dropdown-subcontent'sideOffset={2} alignOffset={-5}>
                                    <DropdownMenu.Item className='dropdown-item '>
                                        <>
                                        <img src={PT} className='dropdown-item-img'/>
                                        <span>Português</span>
                                        </>
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Item className='dropdown-item '>
                                        <>
                                        <img src={EN} className='dropdown-item-img'/>
                                        <span>Inglês</span>
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
