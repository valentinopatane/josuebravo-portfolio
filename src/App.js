import './Styles/App.css'
import NavBar from "./Components/NavBar";
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './Components/FourthSection';
import { ScrollContainer, ScrollPage} from "react-scroll-motion";
function App() {
  return (
    <>
      {/* Barra de navegación superior */}
      <NavBar></NavBar>
      
      <ScrollContainer>
        <main>
          {/* Sección 1 - Presentación */}
          <ScrollPage page={0}>
              <FirstSection/>
          </ScrollPage>
          
          {/* Sección 2 - Proyectos / Scroll Horizontal */}

          <ScrollPage page={1}>
            <SecondSection/>
          </ScrollPage>
          
          {/* Sección 3 - About - Imagen personal */}
          
          <ScrollPage page={2}>
            <ThirdSection/>
          </ScrollPage>

          {/* Sección 4 - Contacto */}

          <FourthSection/>

        </main>
      </ScrollContainer>
    </>
  );
}

export default App;
