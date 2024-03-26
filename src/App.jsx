import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, DangerButton } from "./components/Button/Button.styled";
import { Button2 } from "./components/Button/Button.styled2";
import { GlobalStyle } from "./components/Global.styled";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <GlobalStyle />
        <h1>Заголовок приложения</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Button $highlighted>Выделенная кнопка</Button>
        <Button>Обычная кнопка</Button>
      </div>
      <div>
        <Button2 $size="small">Маленькая кнопка</Button2>
        <Button2 $size="medium">Средняя кнопка</Button2>
        <Button2 $size="large">Большая кнопка</Button2>
      </div>
      <div>
        <Button>Обычная кнопка</Button>
        <DangerButton>Опасная кнопка</DangerButton>
      </div>
    </>
  );
}

export default App;
