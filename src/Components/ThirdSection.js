import { Animator,FadeIn, Move, batch} from "react-scroll-motion";

function ThirdSection(){
    const FadeUp = batch(FadeIn(), Move());
    return(
        <>
            <section className='thirdSection' id='about'>
                <div className='thirdSectionContainer'>
                    <div className='thirdSectionContainerImg'>
                        <Animator animation={FadeUp}>
                            <div>
                                <img src='#' alt='josué'></img>
                            </div>
                        </Animator>
                    </div>
                    <div className='thirdSectionContainerInfo'>
                        <Animator animation={FadeUp}>
                            <h3>Sobre mí</h3>
                            <p>Senior UX/UI Designer currently developing experiences and interfaces for TV, Web and App. Due to my background is Industrial Design, I am specialized in product and experiences development focusing on Visual and Commercial Brand Strategy, User-Centered Design, Design Thinking, Prototyping, Testing and Research</p>
                            <a id='firstSectionContact' className='firstSectionInfoButton' href='#'>Contacto <svg style={{marginLeft: '7px'}}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 4.75H22.5V19.75H1.5V4.75Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.161 5.29999L14.017 11.564C13.4387 12.0088 12.7296 12.25 12 12.25C11.2704 12.25 10.5612 12.0088 9.98296 11.564L1.83896 5.29999" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            </a>
                        </Animator>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ThirdSection