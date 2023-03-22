import './App.css';
import Dashboard from './components/Dashboard';

function App()
{
  return (
    <div className="App">
      <h1 className="App__header">Bird Sightings Around the World</h1>
      <div className="App__body">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
