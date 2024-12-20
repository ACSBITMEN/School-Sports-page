// App.jsx
import './App.css';
import Navbar from './components/NavBar';
import Router from './router';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Router />
      </main>
      <footer>PIE DE PAGINA</footer>
    </>
  );
}

export default App;
