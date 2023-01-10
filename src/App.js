import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Box header="asd">dupa2</Box>
    </div>
  );
}

const Box = ({ header, children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>{header}</h2>
      <h3>Counter44: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Set counter</button>
      <div>{children}</div>
    </>
  );
};
