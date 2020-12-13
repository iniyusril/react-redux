import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
import Datalist from './components/datalist'
import Main from './components/main'

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Counter />
        </div>
        <div className="col-md-6">
          <Datalist />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Main />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
