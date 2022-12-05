import './css/main.css';
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import Footer from "./components/UI/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

function App() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route path='/projects' element={<Projects/>}></Route>
                <Route path='/project/:id' element={<Project/>}></Route>
                <Route path='/contacts' element={<Contacts/>}></Route>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>

            <Footer/>
        </>
    );
}

export default App;
