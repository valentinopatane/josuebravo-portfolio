import React, {useState} from 'react'
import cardsData from './Cards.js'
import { FormattedMessage } from 'react-intl'



function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
            <section className='secondSection' id='trabajos'>   

                <h3><FormattedMessage id="nd.title" defaultMessage="My projects"/></h3>

                
                <div className="containerSlider">
                    {cardsData.map((card, index)=>{
                    return(
                        <div key={card.id} className={slideIndex === index + 1 ? "slide slideActive" : "slide"}>

                                {/* IMAGEN DE CADA PROYECTO */}
                                <div className='slideImage'>
                                    <img src={card.img} alt="proyecto"/>
                                </div>


                                {/* INFO DE CADA PROYECTO */}
                                <div className='slideInfo'>
                                    <h5>{card.title}</h5>
                                    <p>{card.subTitle}</p>
                                    <a href={card.url} target="_blank" rel="noreferrer"><FormattedMessage id="nd.see" defaultMessage="See more"/></a>
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