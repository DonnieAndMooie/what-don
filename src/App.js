import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Wordle from './components/Wordle';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Player />
        <Wordle />
      </div>
    </div>
  );
}

export default App;
