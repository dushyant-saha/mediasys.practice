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

const name = 'Joe';
const Heading = (props) => {
    return (
        <h1 id='abc'>{props.heading}</h1>
    );
};
const Paragraph = () => {
    return (
        <p>This is a test paragraph which is created by ReactJS {8 + 5}.
            This is paragraph has no attribute and is contained inside a div which is also created by ReactJS {8 + 5}</p>
    );
};

const Box = (props) => {
    return (
        <div className="box">
            <Heading heading={props.heading} />
            <Paragraph />
        </div>
    );
};

const Structure = () => {
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

ReactDOM.render(<Structure />, document.getElementById('react-container'));