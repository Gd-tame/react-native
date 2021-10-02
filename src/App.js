// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "header">
      <div className = "bar">
      <ul type = "None" className = "nav">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className = "main">
        <div className = "content">
          <img src = "https://upload.wikimedia.org/wikipedia/commons/f/fb/Schematicky_atom.png"></img>
        </div>
        <div className = "form">
          <form>
            <div className = "Login">
            <label for = "Login">Login Id</label>
            <input type = "text" id = "Login"></input>
            </div>
            <div>
            <label for = "Password">Password</label>
            <input type = "password" id = "Password"></input>
            </div>
            <div className = "button">
            <button type ="Submit">Submit</button>
            </div>

          </form>
        </div>
      </div>
      <footer>
        <p>Just a fun project</p>
        <img src = "https://iiche.netlify.app/img/logoWhite.webp"></img>
      </footer>

    </div>

  );
}

export default App;
