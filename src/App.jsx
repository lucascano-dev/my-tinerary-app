import React from "react";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Welcome />
      </main>
    </>
  );
};

export default App;
