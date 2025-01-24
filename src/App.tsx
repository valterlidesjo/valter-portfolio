import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/Footer";
import SillyStocks from "./pages/SillyStocks";
import SundNergarden from "./pages/SundNergarden";
import TrankanTraining from "./pages/TrankanTraining";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/about-me" element={<AboutMe/>} />
            <Route path="/projects/sillystocks" element={<SillyStocks/>} />
            <Route path="/projects/sundnergarden" element={<SundNergarden/> } />
            <Route path="/projects/trankantraining" element={<TrankanTraining/>} />
          </Routes>
          <Footer />
        </ParallaxProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
