import './css/main.css';
import { Routes, Navigate, Route } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import Footer from './components/UI/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

function App() {
   return (
      <>
         <NavBar />

         <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/project/:id" element={<Project />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>

            {/* Redirect to Home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
