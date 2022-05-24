import './Styles/App.css'


import NavBar from "./Components/NavBar";

import FirstSection from './Components/FirstSection';

function App() {
  return (
    <>
      {/* Barra de navegación superior */}
      <NavBar></NavBar>
      
      <main>
        {/* Sección 1 - Presentación */}
        <section className='firstSection'>
          <FirstSection/>
        </section>

        {/* Sección 2 - Proyectos / Scroll Horizontal */}
        <section className='secondSection' id='trabajos'>
          <h3>
            Mis proyectos
          </h3>
        </section>
        <section className='thirdSection'>
            <div className='thirdSectionContainer'>
              <div className='thirdSectionContainerImg'>
                <div>
                  <img src='#' alt='josué'></img>
                </div>
              </div>
              <div className='thirdSectionContainerInfo'>
                <h3>Sobre mí</h3>
                <p>Diseñador ux/ui, industrial, de interiores y gráfico</p>
                <a id='firstSectionContact' className='firstSectionInfoButton' href='#'>Contacto <svg style={{marginLeft: '7px'}}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 4.75H22.5V19.75H1.5V4.75Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.161 5.29999L14.017 11.564C13.4387 12.0088 12.7296 12.25 12 12.25C11.2704 12.25 10.5612 12.0088 9.98296 11.564L1.83896 5.29999" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </a>
              </div>
            </div>
        </section>


      </main>
    </>

  );
}

export default App;
