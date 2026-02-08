import '../styles/App.css';
import About from './About';
import Header from './Header';
import Projects from './Projects';

function App() {

  return (
    <div className="App">
      <header className="App-header"> 
        <Header />
        <About />
        <Projects />
      </header>
    </div>
  );
}


export default App;
