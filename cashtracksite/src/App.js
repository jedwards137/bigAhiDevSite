import logo from './logo.svg';
import './App.css';
import TransactionsTableComponent from './Components/TransactionsTableComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TransactionsTableComponent />
      </header>
    </div>
  );
}

export default App;
