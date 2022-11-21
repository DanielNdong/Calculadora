import "./styles.css";

import Button from "./components/Button";
import Screen from "./components/Screen";
import { useState } from "react";
import { evaluate } from "mathjs";
export default function App() {
  const [screenResult, setScreenResult] = useState("");


  const cleanAllScreen = (e) => {
    setScreenResult("")
  };

  const isSintaxError = () => {
    return screenResult.includes('SINTAX ERROR')
  }
  
  const handleClick = (e) => {
    if(isSintaxError()) {
      cleanAllScreen()
      setScreenResult(''.concat(e.target.name))
    }
    else setScreenResult(screenResult.concat(e.target.name))
  };
  
  const eraseDigit = () => {
    setScreenResult(screenResult.slice(0, -1));
  };

  const calculate = () => {
    if (screenResult) {
      try {
        setScreenResult(evaluate(screenResult).toString());
      } catch(e) {
        setScreenResult("SINTAX ERROR");
      }
    }
  };

  return (
    <main className="App">
      <section>
        <Screen screenResult={screenResult} />
        <div>
          <Button className="AC" value="AC" cleanAllScreen={cleanAllScreen} />
          <Button className="PTG " value="%" handleClick={handleClick} />
          <Button className="DIV " value="/" handleClick={handleClick} /> {/* &divide; */}
        </div>
        <div>
          <Button value="1" handleClick={handleClick} />
          <Button value="2" handleClick={handleClick} />
          <Button value="3" handleClick={handleClick} />
          <Button value="*" handleClick={handleClick} /> {/* &times; */}
        </div>
        <div>
          <Button value="4" handleClick={handleClick} />
          <Button value="5" handleClick={handleClick} />
          <Button value="6" handleClick={handleClick} />
          <Button value="-" handleClick={handleClick} />
        </div>
        <div>
          <Button value="7" handleClick={handleClick} />
          <Button value="8" handleClick={handleClick} />
          <Button value="9" handleClick={handleClick} />
          <Button value="+" handleClick={handleClick} />
        </div>
        <div>
          <Button value="C" eraseDigit={eraseDigit} />
          <Button value="0" handleClick={handleClick} />
          <Button value="." handleClick={handleClick} />
          <Button value="=" calculate={calculate} />
        </div>
      </section>
    </main>
  );
}
