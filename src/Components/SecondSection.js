import React, {useEffect, useRef, useState} from 'react'
import cardsData from './Cards.js'
import { FormattedMessage } from 'react-intl'


function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    const secondSec = useRef()

    const [beenScrolled, setBeenScrolled] = useState(false)
    
    useEffect(()=>{
        const viewScroll = ()=>{
            const div = secondSec.current
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


    return (
        <>
            <section  ref={secondSec} className='secondSection' id='trabajos'>   

                <h3 className={beenScrolled === true ? 'secondTitleActive secondSectionTitle' : 'secondSectionTitle'}><FormattedMessage id="nd.title" defaultMessage="My projects"/></h3>

                
                <div className="containerSlider">
                    {cardsData.map((card, index)=>{
                    return(
                        <div key={card.id} className={slideIndex === index + 1 ? "slide slideActive" : "slide"}>

                                {/* IMAGEN DE CADA PROYECTO */}
                                <div className={beenScrolled === true ? "slideImage imageScroll" : "slideImage"}>
                                    <img src={card.img} alt="proyecto"/>
                                </div>

                                {/* INFO DE CADA PROYECTO */}
                                <div key={card.url} className={beenScrolled === true ? "slideInfo infoScroll" : "slideInfo"}>
                                    <h5>{card.title}</h5>
                                    <p>{card.subTitle}</p>
                                    <a href={card.url} target="_blank" rel="noreferrer" className='slideInfoLink'><FormattedMessage id="nd.see" defaultMessage="See more"/></a>
                                </div>

                        </div>
                        )
                    })}
                    {/* BOTONES DE NAVEGACION - SLIDER */}
                    <div className="container-dots">
                        {Array.from({length: cardsData.length}).map((item, index) => (
                            <div key={index}
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Slider