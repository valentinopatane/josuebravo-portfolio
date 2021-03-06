import React, { useContext, useState } from 'react'
import { useSpring, animated, flip, config } from 'react-spring'
import { FormattedMessage } from 'react-intl'
import menu from '../Icons/menu.png'
import close from '../Icons/close.png'
import '../Styles/NavBar.css'

import {langContext} from './Context/langContext'


function NavBar(){

    const language = useContext(langContext)

    const props = useSpring({
        to: { marginBottom: 0 },
        from: { marginBottom: 200 },
        reset: false,
        reverse: flip,
        delay: 1100,
        config: config.molasses,
    })
            
    const [move, setMove] = useState(0)

    function switchMove(){
        if (move === 0) {
            setMove(1)
        }else{
            setMove(0)
        }
    }
  
    return(
        <nav className='navBar' id='inicio'>
            <animated.div className={ move === 1 ? 'overflow navBarContainer' : 'navBarContainer'} style={props}>
                <h1 className='navBarTitle'>JOSUÉ<br/>BRAVO</h1>
                <div className={move === 1 ? 'dissapear' : 'navMenu'} onClick={switchMove}><img src={menu} style={{width:'25%', transition:'all 0.5 ease-out'}} alt='navIcon'/></div>
                <div className={move === 0 ? 'dissapear' : 'navMenu'} onClick={switchMove}><img src={close} style={{width:'20%', transition:'all 0.5 ease-out'}} alt='navIcon'/></div>
                <ul className= { move === 1 ? 'navBarList barActive' : 'navBarList'} >
                    <li className='navBarListItem'>
                        <a href='#trabajos' className='navBarListButton' onClick={switchMove}><FormattedMessage id="nav.project" defaultMessage="Projects"/></a>
                    </li>
                    <li className='navBarListItem'>
                        <a href='#about' className='navBarListButton' onClick={switchMove}><FormattedMessage id="nav.about" defaultMessage="About me"/></a>
                    </li>
                    <li className='navBarListItem'>
                        <a href='#contacto' className='navBarListButton' onClick={switchMove}><FormattedMessage id="nav.contact" defaultMessage="Contact"/></a>
                    </li>
                    <li className='navBarListItem'>
                        <div style={{marginRight: '5px', cursor:'pointer'}} onClick={()=>language.settingLang('en')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_136_173)">
<path d="M0 6.03933V8.66666H3.752L0 6.03933ZM3.10933 20.6667H8.66667V16.7753L3.10933 20.6667ZM15.3333 16.776V20.6667H20.89L15.3333 16.776ZM0 15.3333V17.9607L3.75333 15.3333H0ZM20.8913 3.33333H15.3333V7.22466L20.8913 3.33333ZM24 17.9613V15.3333H20.246L24 17.9613ZM24 8.66666V6.03933L20.2473 8.66666H24ZM8.66667 3.33333H3.10933L8.66667 7.22466V3.33333Z" fill="#00247D"/>
<path d="M16.7598 15.3333L23.2345 19.8673C23.5507 19.5416 23.7779 19.1401 23.8945 18.7013L19.0845 15.3333H16.7598ZM8.66649 15.3333H7.23916L0.765159 19.8667C1.11249 20.22 1.55783 20.4727 2.05716 20.59L8.66649 15.962V15.3333ZM15.3332 8.66667H16.7605L23.2345 4.13334C22.8812 3.77485 22.4334 3.52402 21.9432 3.41L15.3332 8.038V8.66667ZM7.23916 8.66667L0.765159 4.13334C0.449128 4.45932 0.221702 4.8607 0.104492 5.29934L4.91449 8.66667H7.23916Z" fill="#CF1B2B"/>
<path d="M24 14H14V20.6667H15.3333V16.776L20.89 20.6667H21.3333C21.6875 20.6667 22.0381 20.596 22.3646 20.4588C22.6911 20.3215 22.9869 20.1204 23.2347 19.8673L16.76 15.3333H19.0847L23.8947 18.7013C23.9567 18.4767 24 18.244 24 18V17.9613L20.246 15.3333H24V14ZM0 14V15.3333H3.75333L0 17.9607V18C0 18.7273 0.292667 19.3853 0.765333 19.8667L7.23933 15.3333H8.66667V15.962L2.05733 20.5893C2.25333 20.636 2.456 20.6667 2.66667 20.6667H3.10933L8.66667 16.7753V20.6667H10V14H0ZM24 6C24.0004 5.30132 23.7254 4.63063 23.2347 4.13333L16.7607 8.66666H15.3333V8.038L21.9433 3.41C21.7436 3.36101 21.5389 3.33529 21.3333 3.33333H20.8913L15.3333 7.22466V3.33333H14V10H24V8.66666H20.2473L24 6.03933V6ZM8.66667 3.33333V7.22466L3.10933 3.33333H2.66667C2.31242 3.33317 1.96171 3.40387 1.63519 3.54126C1.30866 3.67865 1.01291 3.87995 0.765333 4.13333L7.23933 8.66666H4.91467L0.104667 5.29933C0.0385201 5.52713 0.00331561 5.7628 0 6L0 6.03933L3.752 8.66666H0V10H10V3.33333H8.66667Z" fill="#EEEEEE"/>
<path d="M14 10V3.33333H10V10H0V14H10V20.6667H14V14H24V10H14Z" fill="#CF1B2B"/>
</g>
<defs>
<clipPath id="clip0_136_173">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
                        </div>
                        /
                        <div style={{marginLeft: '5px', cursor:'pointer'}} onClick={()=>language.settingLang('sp')}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_136_162)">
<path d="M24 18C24 18.7072 23.719 19.3855 23.219 19.8856C22.7189 20.3857 22.0406 20.6667 21.3333 20.6667H2.66667C1.95942 20.6667 1.28115 20.3857 0.781049 19.8856C0.280952 19.3855 0 18.7072 0 18V5.99999C0 5.29275 0.280952 4.61447 0.781049 4.11438C1.28115 3.61428 1.95942 3.33333 2.66667 3.33333H21.3333C22.0406 3.33333 22.7189 3.61428 23.219 4.11438C23.719 4.61447 24 5.29275 24 5.99999V18Z" fill="#C60A1D"/>
<path d="M0 8H24V16H0V8Z" fill="#FFC400"/>
<path d="M6 11.3333V13.3333C6 13.8638 6.21071 14.3725 6.58579 14.7475C6.96086 15.1226 7.46957 15.3333 8 15.3333C8.53043 15.3333 9.03914 15.1226 9.41421 14.7475C9.78929 14.3725 10 13.8638 10 13.3333V11.3333H6Z" fill="#EA596E"/>
<path d="M8 10.6667H10V12.6667H8V10.6667Z" fill="#F4A2B2"/>
<path d="M6 10.6667H8V12.6667H6V10.6667Z" fill="#DD2E44"/>
<path d="M8 10.6667C9.10457 10.6667 10 10.219 10 9.66667C10 9.11439 9.10457 8.66667 8 8.66667C6.89543 8.66667 6 9.11439 6 9.66667C6 10.219 6.89543 10.6667 8 10.6667Z" fill="#EA596E"/>
<path d="M8 9.66667C9.10457 9.66667 10 9.44281 10 9.16667C10 8.89053 9.10457 8.66667 8 8.66667C6.89543 8.66667 6 8.89053 6 9.16667C6 9.44281 6.89543 9.66667 8 9.66667Z" fill="#FFAC33"/>
<path d="M4.6665 10.6667H5.33317V15.3333H4.6665V10.6667ZM10.6665 10.6667H11.3332V15.3333H10.6665V10.6667Z" fill="#99AAB5"/>
<path d="M4 14.6667H6V15.3333H4V14.6667ZM10 14.6667H12V15.3333H10V14.6667ZM4.66667 10H5.33333V10.6667H4.66667V10ZM10.6667 10H11.3333V10.6667H10.6667V10Z" fill="#66757F"/>
</g>
<defs>
<clipPath id="clip0_136_162">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
                        </div>
                    </li>
                </ul>
            </animated.div>
        </nav>
    )
}
export default NavBar