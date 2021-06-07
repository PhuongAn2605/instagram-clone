import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login-page/LoginPage';
import HomePage from './components/homepage/HomePage';

function App() {
  return (
    <div className="App">
        {/* <LoginPage/> */}
        {/* <HomePage /> */}

        {
          (localStorage.getItem("users") == undefined || localStorage.getItem("users") == null) ?
          <LoginPage /> : <HomePage />
        }
    </div>
  );
}

export default App;
