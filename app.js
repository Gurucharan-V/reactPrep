import React from "react";
import ReactDOM from "react-dom/client";

const block = <div className="firstContainer">
  <h1>This is JSX</h1>
  <p>This is a paragraph</p>
</div>;

const Address = () => {
  return (
    <div className="firstContainer">
      <h4>Address</h4>
      <p>123 React Lane, 53211</p>
    </div>
  );
};


let brr = [11, 12, 13];

let g = brr.filter((i) => i%2 ===1);



function Dateofbirth() {
  const lines = Array.from({ length: 3 }).map((_, i) => i + 12);
  return (<div> {lines}</div>);
}

let arr = [11, 12, 13];

const Title = () => {
  return <p>This is title for every section</p>;
}





const Gc = () => {
  return (
    <div className="headerContainer">
      {/* <h1>Gourav Choudhary</h1>
      {g}
      <h1>Software Developer</h1>
      <p>here is the profile</p>
      <Address />
      <Dateofbirth />
      {block}
      <div>{"\n"}</div>
      {arr} */}


      <div>
        {Title()}
        <Title />
        <Title></Title>
      </div>
    </div>

   
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Gc />);
