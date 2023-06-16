import React from "react"; // Importing React to create the component
import Header from "./components/Header/Header"; // Importing the Header component
import Body from "./components/Body/Body"; // Importing the Body component

const App = () => {
  return (
    <main>
      <Header /> {/* Render the Header component */}
      <hr /> {/* Render a horizontal line */}
      <Body /> {/* Render the Body component */}
    </main>
  );
};

export default App;
