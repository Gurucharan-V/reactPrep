import React from "react"; 
import ReactDOM from "react-dom/client"; 

const root=ReactDOM.createRoot(document.getElementById("root"));




const normaljs =  function() { return <h2>this JSX coming form regular js</h2>};

const title = (
    <h6>
        this is a react functional form component using JSX
    </h6>
);
    
const Heading = () => <h3>this is a react functional component</h3>;

let x = 10;
const y = 20;

const Layout = () => 
     (

        

        <div>
            <h1>
                this is a react functional component using arrow function
            </h1>
            {<h1>{x + y}</h1>}
            {<h2>{x * y}</h2>}
            {normaljs()}
            {title}
            <Heading />
        </div>
    );

root.render(<Layout />);