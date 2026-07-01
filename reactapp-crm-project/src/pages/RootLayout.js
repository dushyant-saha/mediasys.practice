import { Children } from 'react';
import logo from './../logo.png'
import { NavLink, Link, Outlet } from 'react-router-dom';

const Navlink = (props) => {
  return (
    <li className="nav-item">
      {/* <a className="nav-link" href="#">{props.title}</a> */}
      <Link to={props.pagePath} className="nav-link">{props.title}</Link>
    </li>
  );
}

const NavDropdown = ({ title, children, style }) => {
  return (
    <li className="nav-item dropdown ">
      <a className={"nav-link dropdown-toggle " + style} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {title}
      </a>
      <ul className="dropdown-menu">
        {children}
      </ul>
    </li>
  );
}

const Navbar = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-0">
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="#"><img src={logo} className="logo"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* I must add navbar items in the ul below:*******************/}
          <ul className="navbar-nav mb-2 mb-lg-0">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default function RootLayout() {
  return (
    <section>
      <Navbar>
        <Navlink title="Home" pagePath="/"></Navlink>
        <NavDropdown title="Practice">
          <li><a className="dropdown-item cursor-default fw-bold">Topics</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><NavLink className="dropdown-item" to='/practice-components'>Component Practice</NavLink></li>
          <li><NavLink className="dropdown-item" to='/practice-components'>Component Practice</NavLink></li>
        </NavDropdown>
        {/* <Navlink title="Component List" pagePath="/component_list"></Navlink> */}
        <Navlink title="Link-C" pagePath="/about"></Navlink>
        <NavDropdown
          style="login"
          title={<svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" /></svg>}>
          <li><a className="dropdown-item cursor-default">Login Actions</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign Up</a></li>
          <li><a className="dropdown-item" href="#">Sign In</a></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
        </NavDropdown>
      </Navbar>
      <Outlet />
    </section>
  );
}