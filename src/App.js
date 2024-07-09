import logo from './logo.svg';
import './css/App.css';
import CreateListing from './CreateListing';
import SignUp from './SignUp';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="header-copy">
              <h1 className="header-title">toolbelt</h1>
              <h4>Build things in other people's garages. Borrow from their toolbelt? There's some sort of saying like
                this
              </h4>
          </div>
          <SignUp />
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>

      </div>
      <CreateListing />
    </>
  );
}

export default App;