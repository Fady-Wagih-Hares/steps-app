import { useState } from "react";

const App = () => {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  // const step = 1;
  //  [variable state , update state (function)]
  // use state is a top level called in the code we can not put it in block of code
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({
  //   name: "Fady",
  // });
  // console.log(arr);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((curStep) => curStep - 1);
    // console.log(step);
  };
  const handleNext = () => {
    //  update step variable and render it in the dom
    // use callback function to update the current state
    if (step < 3) setStep((curStep) => curStep + 1);
    // console.log(step);
    // it worked but  Bad Practice  of mutating the object
    //  it can not work in complex situation and if u want to update an object just update it from setter function
    //  react is all about immutability and functional state update
    // test.name = "Fred";
    // pass the complete new object
    //  always treat state as immutable in react
    // setTest({ name: "Fred" });
  };
  return (
    // js mode {} must be inside element
    <>
      {/* handle exit button */}
      <button
        className="close"
        onClick={() => setIsOpen((curIsOpen) => !curIsOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button onClick={() => handlePrevious()}> Previous</button>
            <button onClick={() => handleNext()}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};
export default App;
