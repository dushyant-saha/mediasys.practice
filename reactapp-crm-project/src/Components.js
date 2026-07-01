import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  React,{ useState, useEffect} from 'react';

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
const Accordion = () => {
  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
          >
            Accordion Item
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            Content
          </div>
        </div>
      </div>
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
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body">
            Content
          </div>
        </div>
      </div>
    </div>
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

const Clock = ()=>{
  const [time,setTime] = useState(null);

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

export const Practice = () => {
  return (
    <section>
      <section className="react-body">
        <div className="vr"></div>
        <Grid></Grid>
        <Callout></Callout>
        <Tooltip></Tooltip>
        <Accordion ></Accordion>
        <Accordion />
        <Alert />
        <Badge />
        <Breadcrumb />
        <Button />
        <ButtonGroup />
        <Card />
        <Carousel />
        <CloseButton />
        <Collapse />
        <Dropdown />
        <ListGroup />
        <Modal />
        <NavTabs />
        <Offcanvas />
        <Pagination />
        <Placeholder />
        <Popover />
        <Progress />
        <Scrollspy />
        <Spinner />
        <Toast />
        <Tooltip />
        <Counter />
        <Clock/>
      </section>
    </section>
  );
}

export const Home = ()=>{
  return(<h1>Home Page</h1>);
};

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
