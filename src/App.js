import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import './style/App.css';
import Tareas from './componet/Tareas';
import Navbar from './componet/NavBar';
import Nueva_tarea from './pages/NuevaTarea';
const user = {
  username: 'user',
  password: 'pass'
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    localStorage.setItem('loggedIn', loggedIn);
  }, [isDarkMode, loggedIn]);

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
        <Navbar
          loggedIn={loggedIn}
          logout={logout}
          username={user.username}
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn}/>} />
          <Route
            path="/login"
            element={<Login user={user} login={() => setLoggedIn(true)} loggedIn={loggedIn} />}
          />
          <Route
            path="/contact"
            element={
              loggedIn ? <Contact /> : <Login user={user} login={() => setLoggedIn(true)} loggedIn={loggedIn} />
            }
          />
          <Route
            path="/nueva_tarea"
            element={
              loggedIn ? <Nueva_tarea /> : <Login user={user} login={() => setLoggedIn(true)} loggedIn={loggedIn} />
            }
          />
          <Route
            path="/tareas"
            element={loggedIn ? <Tareas /> : <Login user={user} login={() => setLoggedIn(true)} loggedIn={loggedIn} />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
