import React from "react";
import Header from "./Header";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <h1>Help Queue</h1>
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      {/* This is a JSX comment */}
      <div className="class-name">div class name test</div>
      <hr/>
    </React.Fragment>
  )
}

export default App