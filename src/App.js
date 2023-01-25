import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  const [counter, setCounter] = useState(0);

  const onBtnClickHandler = () => {
    setCounter(counter+1);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
            <button onClick={onBtnClickHandler} type="button" className="btn btn-primary">Current Number: {counter}</button>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
