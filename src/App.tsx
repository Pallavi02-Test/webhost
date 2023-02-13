import React from "react";
import "./App.css";

function App() {
  const handleOnClick = () => {
    console.log("navigator share", navigator.share);
    // if (navigator.share) {
    //   console.log("navigator share if statement");
    navigator
      .share({
        title: "Test",
        text: "Check out this share option",
        url: "https://www.google.com/",
      })
      .then(() => {
        console.log("Successfully shared");
      })
      .catch((error) => {
        console.error("Something went wrong sharing the blog", error);
      });
    // }
  };

  return (
    <div>
      <button onClick={handleOnClick}>Share</button>
    </div>
  );
}

export default App;
