import logo from './logo.svg';
import './App.css';
import React from 'react';

/**Navbar components: */
const Navlink = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">{props.title}</a>
    </li>
  );
}

const Navdropdown = (props) => {
  return (
    <li className="nav-item dropdown ">
      <a className={"nav-link dropdown-toggle " + props.style} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {props.title}
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item">Login Actions</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign Up</a></li>
        <li><a className="dropdown-item" href="#">Sign In</a></li>
        <li><a className="dropdown-item" href="#">Logout</a></li>
      </ul>
    </li>
  );
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="./logo.png" className="logo"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* I must add navbar items in the ul below:*******************/}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Navlink title="Daily Activity"></Navlink>
            <Navlink title="Support Case"></Navlink>
            <Navlink title="Inventory Register"></Navlink>
            <Navdropdown style="login" title={<svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>}>
            </Navdropdown>
          </ul>
        </div>
      </div>
    </nav>

  );
};


const App = () => {
  return (
    <section>
      <Navbar></Navbar>
    </section>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
/**
 class Name extends React.Component{
  render(){
    return();
  }
 }
 */

export default App;
