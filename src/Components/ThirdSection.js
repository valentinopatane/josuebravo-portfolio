import { useRef, useState, useEffect} from 'react'

import josue from '../Icons/Layer 0.png'
import { FormattedMessage } from 'react-intl'

function ThirdSection(){

    const thirdSec = useRef()

    const [beenScrolled, setBeenScrolled] = useState(false)
    
    useEffect(()=>{
        const viewScroll = ()=>{
            const div = thirdSec.current
            const { y } = div.getBoundingClientRect(); 

            if( y <= 220 ){
                setBeenScrolled(true)
            }
        }
        window.addEventListener('scroll', viewScroll)
        return ()=>{
            window.removeEventListener('scroll', viewScroll)
        }
    },[])

    return(
        <>
            <section className='thirdSection' id='about' ref={thirdSec}>
                <div className='thirdSectionContainer'>
                    <div className={ beenScrolled === true ? 'thirdShowImg thirdSectionContainerImg' : 'thirdSectionContainerImg' }>
                            <div>
                                <img src={josue} alt='josué'></img>
                            </div>
                    </div>
                    <div className= { beenScrolled === true ? 'thirdShowInfo thirdSectionContainerInfo' : 'thirdSectionContainerInfo'} >
                            <h3><FormattedMessage id="nav.about" defaultMessage="About me"/></h3>
                            <p><FormattedMessage id="third.info" defaultMessage="Senior UX/UI Designer currently developing experiences and interfaces for TV, Web and App. Due to my background is Industrial Design, I am specialized in product and experiences development focusing on Visual and Commercial Brand Strategy, User-Centered Design, Design Thinking, Prototyping, Testing and Research."/></p>
                            <a id='firstSectionContact' className='firstSectionInfoButton' href="mailto: josuebravodi@gmail.com"><FormattedMessage id="nav.contact" defaultMessage="Contact"/><svg style={{marginLeft: '7px'}}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 4.75H22.5V19.75H1.5V4.75Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.1609 5.29999L14.0169 11.564C13.4386 12.0088 12.7295 12.25 11.9999 12.25C11.2703 12.25 10.5611 12.0088 9.98286 11.564L1.83887 5.29999" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ThirdSection