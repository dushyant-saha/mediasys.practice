import './../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

// Bootstrap Component
class Grid extends React.Component {
  render() {
    return (
      <div className="container text-center bg-info-subtle">
        <div className="row">
          <div className="col border border-3 border-primary-subtle">
            Column
          </div>
          <div className="col border border-3 border-primary-subtle">
            Column
          </div>
          <div className="col border border-3 border-primary-subtle">
            Column
          </div>
        </div>
      </div>
    );
  }
}

/** */
const Accordion = ({ children, id }) => {
  return (
    <div className="accordion" id={id} data-bs-theme="dark">
      {children}
    </div>
  );
};

const Alert = () => {
  return (
    <div className="alert alert-primary" role="alert">
      Alert Message
    </div>
  );
};

const Badge = () => {
  return (
    <span className="badge text-bg-primary">
      Badge
    </span>
  );
};

const Breadcrumb = () => {
  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li className="breadcrumb-item active">
          Current
        </li>
      </ol>
    </nav>
  );
};

const Button = () => {
  return (
    <button className="btn btn-primary">
      Button
    </button>
  );
};

const ButtonGroup = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-primary">
        Left
      </button>
      <button className="btn btn-primary">
        Middle
      </button>
      <button className="btn btn-primary">
        Right
      </button>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        Card Content
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://via.placeholder.com/800x300"
            className="d-block w-100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const CloseButton = () => {
  return (
    <button
      type="button"
      className="btn-close"
    />
  );
};

const Collapse = () => {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        Toggle
      </button>

      <div
        className="collapse"
        id="collapseExample"
      >
        <div className="card card-body">
          Content
        </div>
      </div>
    </>
  );
};

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
      >
        Dropdown
      </button>

      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
      </ul>
    </div>
  );
};

const ListGroup = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        Item 1
      </li>
      <li className="list-group-item">
        Item 2
      </li>
    </ul>
  );
};

const Modal = () => {
  return (
    <section className='modal-box'>
      {/* Modal  */}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Modal
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              Content
            </div>
            <div class="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NavTabs = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Profile
        </a>
      </li>
    </ul>
  );
};

const Offcanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
    >
      <div className="offcanvas-header">
        <h5>Offcanvas</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        />
      </div>
      <div className="offcanvas-body">
        Content
      </div>
    </div>
  );
};

const Pagination = () => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Placeholder = () => {
  return (
    <div>
      <span className="placeholder col-6" />
    </div>
  );
};

const Popover = () => {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-bs-toggle="popover"
      data-bs-content="Popover content"
    >
      Popover
    </button>
  );
};

const Progress = () => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ width: "50%" }}
      >
        50%
      </div>
    </div>
  );
};

const Scrollspy = () => {
  return (
    <div
      data-bs-spy="scroll"
      style={{ height: "200px", overflow: "auto" }}
    >
      Scrollable Content
    </div>
  );
};

const Spinner = () => {
  return (
    <div
      className="spinner-border"
      role="status"
    />
  );
};

const Toast = () => {
  return (
    <div className="toast show">
      <div className="toast-header">
        <strong className="me-auto">
          Toast
        </strong>
      </div>
      <div className="toast-body">
        Message
      </div>
    </div>
  );
};

const Tooltip = () => {
  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-bs-toggle="tooltip"
      title="Tooltip text"
    >
      Tooltip
    </button>
  );
};

/** */

class Callout extends React.Component {
  render() {
    return (
      <div className="callout p-3 bg-primary-subtle border-start border-3 border-primary">
        <p className='mb-0'>This is a callout division</p>
      </div>);
  }
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" title="Tooltip text" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

const Clock = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // setInterval(()=>{
    //   const now = new Date();
    //   setTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
    // },1000);
    console.log("run")
    setTime()
  }, []);
  return (
    <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" title="Tooltip text">
      <h1>{time}</h1>
    </button>
  );
};

const NewCounter = () => {
  const [A, updateA] = useState(0);

  return (
    <button className='btn btn-primary' onClick={() => { updateA(A + 1) }}>
      <p className='mb-0'>Count: {A}</p>
    </button>
  );
}

function UserData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // This code runs AFTER the component shows up on the screen
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        console.log(data)
      }
      );
  }, []); // 👈 The empty array means "only run this once when the page loads"

  return <div>{userData ? userData[0].name : "Loading..."}</div>;
}

export const ComponentPractice = () => {
  return (
    <section>
      <div className='custom-row'>
        <h2 className=''>Grid</h2>
        <Grid />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Callout</h2>
        <Callout></Callout>
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Tooltip</h2>
        <Tooltip />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Accordion</h2>
        <Accordion id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Accordion Item
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Content
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Accordion Item
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Content
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Accordion Item
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Content
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Alert</h2>
        <Alert />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Badge</h2>
        <Badge />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Breadcrumb</h2>
        <Breadcrumb />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Button</h2>
        <Button />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>ButtonGroup</h2>
        <ButtonGroup />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Card</h2>
        <Card />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Carousel</h2>
        <Carousel />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>CloseButton</h2>
        <CloseButton />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Collapse</h2>
        <Collapse />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Dropdown</h2>
        <Dropdown />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>ListGroup</h2>
        <ListGroup />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Modal</h2>
        <Modal />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>NavTabs</h2>
        <NavTabs />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Offcanvas</h2>
        <Offcanvas />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Pagination</h2>
        <Pagination />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Placeholder</h2>
        <Placeholder />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Popover</h2>
        <Popover />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Progress</h2>
        <Progress />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Scrollspy</h2>
        <Scrollspy />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Spinner</h2>
        <Spinner />
      </div>
      <div className='custom-row'>
        <h2 className='mt-5'>Tooltip</h2>
        <Tooltip />
      </div>
      <div className='custom-row'>
      </div>

      <section className="react-body">
        <Counter />
        <Clock />
      </section>
    </section>
  );
}



/*========================================================================================================================
//***DO NOT UNCOMMENT*** This is default create-react-app project code which is redundant:
========================================================================================================================
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
***************************
class Name extends React.Component{
  render(){
    return();
  }
 }
*/

// export default App;
// export default {Navbar, Home};
