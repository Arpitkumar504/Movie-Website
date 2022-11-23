import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home.js';
import Login from './page/Login.js';
import Signin from './page/Signin.js';
import Nopage from './page/Nopage.js';
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js'
import Practice from './page/Practice.js';
import Forms from './page/Forms.js';
import Validation from './page/Validation.js'
import Todo from './page/Todo.js';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar heading="Netflix" link="https://www.netflix.com" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/prac" element={<Practice />} />
                <Route path='/forms' element={<Forms />} />
                <Route path='/vali' element={<Validation />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='*' element={<Nopage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;