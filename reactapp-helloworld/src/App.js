import logo from './logo.svg';
import './App.css';
import React from 'react';

// Practicing creating an html using basic react sytax ========================================================================================================================
/*
const heading = React.createElement(
    'h1', {id: 'abc'}, 'This is some heading content'
);

const paragraph = React.createElement(
    'p', null, 'This is a test paragraph which is created by React. This is paragraph has no attribute and is contained inside a div which is also created by React'
);

const box = React.createElement(
    'div', 
    {className:'box'}, 
    heading,
    paragraph
);

ReactDOM.render(box, document.getElementById('react-container'));
*/

//Practicing JSX to create react elements (19/06/2026) ========================================================================================================================
/*
const heading = <h1 id='abc'>This is some heading content</h1>

const paragraph = <p>This is a test paragraph which is created by React. This is paragraph has no attribute and is contained inside a div which is also created by React</p>

const box = (
    <div className='box'>
        <h1 id='abc'>This is some heading content</h1>
        <p>This is a test paragraph which is created by React. This is paragraph has no attribute and is contained inside a div which is also created by React</p>
    </div>
    );

ReactDOM.render(box, document.getElementById('react-container'));
*/

//Expressions in JSX (19/06/2026) ========================================================================================================================
// const name = 'Joe';
// const myAttr = 'abc'
// const heading = <h1 id='abc'>This is {name}'s heading content</h1>

// const paragraph = <p>This is a test paragraph which is created by React. This is paragraph has no attribute and is contained inside a div which is also created by React</p>

// const box = (
//     <div className='box'>
//         <h1 id='abc'>This is {name}'s heading content</h1>
//         <p>This is a test paragraph which is created by ReactJS {8+5}. This is paragraph has no attribute and is contained inside a div which is also created by ReactJS {8+5}</p>
//     </div>
//     );

// ReactDOM.render(box, document.getElementById('react-container'));

//Creating a component in React (19/06/2026) ========================================================================================================================

// const name = 'Joe';
// function Heading (){
//     return(
//         <h1 id='abc'>This is {name}'s heading content</h1>
//     );
// }

// ReactDOM.render(<Heading/>, document.getElementById('react-container'));

//Composing larger UI components out of smaller UI components (19/06/2026) ========================================================================================================================
// const name = 'Joe';
// function Heading() {
//     return (
//         <h1 id='abc'>This is {name}'s heading element</h1>
//     );
// }

// function Paragraph() {
//     return (
//         <p>This is a test paragraph which is created by ReactJS {8 + 5}.
//             This is paragraph has no attribute and is contained inside a div which is also created by ReactJS {8 + 5}</p>
//     );
// }

// function Box() {
//     return (
//         <div className="box">
//             <Heading />
//             <Paragraph />
//         </div>
//     );
// }

// //Here I managed composing a larger UI Component using smaller UI components below:
// function Structure() {
//     return (
//         <div className="row">
//             <div className="col">
//                 <Box />
//             </div>
//             <div className="col">
//                 <Box />
//             </div>
//         </div>

//     );
// }

// ReactDOM.render(<Structure />, document.getElementById('react-container'));

//Creating components using arrow functions (19/06/2026) ========================================================================================================================

// const name ='Joe';
// const Heading = ()=>{
//     return(
//         <h1 id='abc'>This is {name}'s heading element</h1>
//     );
// };
// const Paragraph = ()=>{
//     return(
//         <p>This is a test paragraph which is created by ReactJS {8 + 5}.
//          This is paragraph has no attribute and is contained inside a div which is also created by ReactJS {8 + 5}</p>
//     );
// };

// const Box = ()=>{
//     return(
//         <div className="box">
//             <Heading/>
//             <Paragraph/>
//         </div>
//     );
// };

// ReactDOM.render(<Box/>, document.getElementById('react-container'));

//Using props in components (19/06/2026) ========================================================================================================================

// const name = 'Joe';
// const Heading = (props) => {
//     return (
//         <h1 id='abc'>{props.heading}</h1>
//     );
// };
// const Paragraph = () => {
//     return (
//         <p>This is a test paragraph which is created by ReactJS {8 + 5}.
//             This is paragraph has no attribute and is contained inside a div which is also created by ReactJS {8 + 5}</p>
//     );
// };

// const Box = (props) => {
//     return (
//         <div className="box">
//             <Heading heading={props.heading} />
//             <Paragraph />
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div className="row">
//             <div className="col">
//                 <Box heading='First Heading' />
//             </div>
//             <div className="col">
//                 <Box heading='Second Heading' />
//             </div>
//         </div>
//     );
// }

//Creating class components (20/06/2026) ========================================================================================================================
/*
Functional components are stateless and can only accept information in the form of props and returns html elements in form of JSX which will be rendered into UI

Class components are the only components where states are available; here I will change the App component into a class component
*/
const name = 'Joe';
const Heading = (props) => {
  return (
    <h1 className={props.className} >{props.heading}</h1>
  );
};
const Paragraph = () => {
  return (
    <p>This is a test paragraph which is created by ReactJS {8 + 5}.
      This is paragraph has no attribute and is contained inside a div which is also created by ReactJS {8 + 5}</p>
  );
};

/**
 Self written notes: ***Creating a class component
 In a class component, props are not used as parameters as they are accessed in functional components
 Here props is a property of the class component itself that is automagically assigned an object containing a list of props passed to the component
 Hence we refer to props as this.props instead of simply props
 */

 class Box extends React.Component {

  state = { color: "black" };

  changeState(color){
    console.log(color);
    this.setState({color:color});
  }

  render() {
    return (
      <div className="box">
        <Heading heading={this.props.heading} className={this.state.color}/>
        <Paragraph />
        <button onClick={()=>{this.changeState("red")}}>Red</button>
        <button onClick={()=>{this.changeState("green")}}>Green</button>
        <button onClick={()=>{this.changeState("blue")}}>Blue</button>
        <button onClick={()=>{this.changeState("yellow")}}>Yellow</button>
      </div>
    );
  }
};

/**
 Self written notes: ***Creating a state
 just like "props", "state" is also a property to the class component and is an object but needs to be explicitly added.
 whatever property I need to add is added as a property of the state object   
 */

class App extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col">
          <Box heading='First Heading' />
        </div>
        <div className="col">
          <Box heading='Second Heading' />
        </div>
      </div>

    );
  }
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
*/

export default App;
