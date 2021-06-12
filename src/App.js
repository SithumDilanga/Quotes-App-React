import logo from './logo.svg';
import './App.css';

function App() {

  const elements = [];

  for(let i = 0; i < 20; i++){
    elements.push(
      <div className = "item">item {i}</div>
    );
  }

  return (
    <div className = "grid">
      {elements}
    </div>
  );
}

export default App;
