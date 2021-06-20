import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Destination from "./components/Destination";
import Footer from "./components/Footer";

import "./reset.css";
import "./style.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <>
      <Header />
      <main>
        <h1>Where do you want to land?</h1>
        <Form setCity={setCity} />
      </main>
      <Destination city={city} />
      <Footer />
    </>
  );
}

export default App;
