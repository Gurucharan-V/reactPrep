import React from "react"; 
import ReactDOM from "react-dom/client"; 

/*  Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)*/
const root = ReactDOM.createRoot(document.getElementById("root"));
const kroot = ReactDOM.createRoot(document.getElementById("kroot"));
const broot = ReactDOM.createRoot(document.getElementById("broot"));

const titlecomponent1 = React.createElement("div", 
    { id:"firstdiv"},
    [React.createElement("div", {id:"secondDiv", key:"childnested"}, React.createElement("h1", {id:"title"}, "This is a Title using react")),
    React.createElement("h2", {id:"subtitle", key:"childout"}, "This is a Subtitle using react")]);


root.render(titlecomponent1);


/*
○ Create the same element using JSX

*/

const titlecomponent2 = (<div
id="firstid1"> 
<div id="secondId1">
<h1 id="title1">This is a Title using JSX</h1>
</div>
<h2 id="subtitle1">This is a Subtitle using JSX</h2>
</div>);

kroot.render(titlecomponent2);

/*
○ Create a functional component of the same with JSX
○ Pass attributes into the tag in JSX
○ Composition of Component(Add a component inside another)

*/const Head2 = () => <h2 id="subtitle2" tabIndex ="4">This is a Subtitle using functional component</h2>;

const TitleComponent3 = () => {
    return ( <div id="firstid3"> 
        <div id="secondId3">
            <h1 id="title3">This is a Title using functional component</h1>
        </div>
        {Head2()}
        {<Head2/>}
        {<Head2></Head2>}
    </div>);
};

broot.render(<TitleComponent3 />);

/*
○ {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
*/




/*
● Create a Header Component from scratch using Functional Com */

