import { useSpring, animated, flip, config } from 'react-spring'

import '../Styles/NavBar.css'



function NavBar(){

    const props = useSpring({
        to: { marginBottom: 0 },
        from: { marginBottom: 200 },
        reset: false,
        reverse: flip,
        delay: 1100,
        config: config.molasses,
      })

    function activeLink(e){
        const listItem = e.target.parentNode;

        listItem.classList.toggle('navBarListItemActive')
    }

    return(
        <nav className='navBar'>
            <animated.div className='navBarContainer' style={props}>
                <h1 className='navBarTitle'>JOSUÉ<br/>BRAVO</h1>

                <ul className='navBarList'>
                    <li className='navBarListItem'><a href='#trabajos' className='navBarListButton' onClick={activeLink}>TRABAJOS</a></li>
                    <li className='navBarListItem'><a href='#trabajos' className='navBarListButton' onClick={activeLink}>SOBRE MÍ</a></li>
                    <li className='navBarListItem'><a href='#trabajos' className='navBarListButton' onClick={activeLink}>CONTACTO</a></li>
                </ul>
            </animated.div>
        </nav>
    )
}
export default NavBar