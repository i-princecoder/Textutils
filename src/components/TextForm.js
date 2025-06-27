import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const handleUpClick = () => {
    // console.log("button was clicked", +text);
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted To Uppercase", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    settext(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted To Lowercase", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied", "success");
  };

  const handleCapClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((words) => words.charAt(0).toUpperCase() + words.slice(1))
      .join(" ");
    settext(newText);
    props.showAlert("Text is Capitalized", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    settext(newText);
    props.showAlert("Text is cleared", "success");
  };

  const btnColor = () => {
    return props.mode === "success"
      ? "success"
      : props.mode === "dark"
      ? "dark"
      : "primary";
  };

  return (
    <>
      <div
        className="container"
        style={{
          color:
            props.mode === "dark" || props.mode === "success"
              ? "white"
              : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "#232323"
                  : props.mode === "success"
                  ? "#198754"
                  : "white",
              color:
                props.mode === "dark" || props.mode === "success"
                  ? "white"
                  : "black",
            }}
          ></textarea>
        </div>
        <div className="btn-wrapper">
          <button
            className={`btn btn-${btnColor()} btn-custom mx-3`}
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>
          <button
            className={`btn btn-${btnColor()}  btn-custom mx-2`}
            onClick={handleLowClick}
          >
            Convert ToLowercase
          </button>
          <button
            className={`btn btn-${btnColor()} btn-custom mx-2`}
            onClick={handleCapClick}
          >
            Convert To Capitalized Case
          </button>
          <button
            className={`btn btn-${btnColor()} btn-custom mx-2`}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            className={`btn btn-${btnColor()} btn-custom mx-2`}
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color:
            props.mode === "dark" || props.mode === "success"
              ? "white"
              : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <i>
            {
              text
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length
            }{" "}
            Words And {text.length} Characters
          </i>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something In The Textbox Above To Preview It Here"}
        </p>
      </div>
    </>
  );
}
