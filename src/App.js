import './Styles/App.css'
import NavBar from "./Components/NavBar";
import FirstSection from './Components/FirstSection';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import FourthSection from './Components/FourthSection';


import { langContext } from './Components/Context/langContext';

function App() {
return (
  <>
      {/* Barra de navegación superior */}
      <NavBar></NavBar>
      
        <main>
          {/* Sección 1 - Presentación */}
            <FirstSection/>
          
          {/* Sección 2 - Proyectos / Scroll Horizontal */}

            <SecondSection/>
          
          {/* Sección 3 - About - Imagen personal */}
          
            <ThirdSection/>

          {/* Sección 4 - Contacto */}

          <FourthSection/>

        </main>
  </>
  );
}

export default App;
