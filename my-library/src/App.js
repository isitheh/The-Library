import './App.css';
import LibrariesList from './LibrariesList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h1>The Library</h1>
      <hr />
      <LibrariesList />
    </div>
  );
}

export default App;
