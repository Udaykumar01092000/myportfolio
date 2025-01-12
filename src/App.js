import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from './components/Hero';
import About from './components/about';
import Skills from "./components/skills";
import Resume from "./components/resume";
import Summary from "./components/summary";
import Portfolio from "./components/portfolio";
import Services from './components/services';
import Contact from './components/contact';
import ProjectDetails from "./components/projectdetails";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrolltop";

const Layout = ({ children }) => {
    // const location = useLocation();

    // // Conditionally render the navbar based on the route
    // const isProjectDetailsPage = location.pathname.startsWith('/project/');

    return (
        <>
            {<Navbar />}
            {children}
            <ScrollToTop/>
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <About />
                            <Skills />
                            <Resume />
                            <Summary />
                            <Portfolio />
                            <Services />
                            <Contact />
                            <Footer/>
                        </>
                    } />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
