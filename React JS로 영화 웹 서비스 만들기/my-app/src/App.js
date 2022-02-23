// 어떻게 특정 코드들이 첫번째 componene render에서만 실행되게 하는지 배우고 싶다.

import { useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('call an api');

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;