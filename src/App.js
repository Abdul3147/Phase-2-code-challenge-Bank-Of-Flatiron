import TransForm from './Transactions';
import jsonData from './Data';
import './App.css';

function App() {
  const transactionsData = jsonData.transactions;
  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransForm transactions={transactionsData}/>
      
    </div>
  );
}

export default App;
