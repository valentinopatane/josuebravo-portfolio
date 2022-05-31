import React, {useState} from 'react'
import cardsData from './Cards.js'
import { Animator,MoveIn,FadeIn} from "react-scroll-motion";


function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
            <section className='secondSection' id='trabajos'>   
                <Animator animation={FadeIn()}>
                    <h3>Mis proyectos</h3>
                </Animator>
                
                <div className="containerSlider">
                    {cardsData.map((card, index)=>{
                    return(
                        <div key={card.id} className={slideIndex === index + 1 ? "slide slideActive" : "slide"}>
                            <Animator animation={MoveIn(-1000,0)}>
                                {/* IMAGEN DE CADA PROYECTO */}
                                <div className='slideImage'>
                                    <img src={card.img} alt="proyecto"/>
                                </div>
                            </Animator>
                            <Animator animation={MoveIn(1000,0)}>
                                {/* INFO DE CADA PROYECTO */}
                                <div className='slideInfo'>
                                    <h5>{card.title}</h5>
                                    <p>{card.subTitle}</p>
                                    <a href='#'>Ver más</a>
                                </div>
                            </Animator>
                        </div>
                        )
                    })}
                    {/* BOTONES DE NAVEGACION - SLIDER */}
                    <div className="container-dots">
                        {Array.from({length: cardsData.length}).map((item, index) => (
                            <div 
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