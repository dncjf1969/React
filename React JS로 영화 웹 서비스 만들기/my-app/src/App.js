// 어떻게 특정 코드들이 첫번째 componene render에서만 실행되게 하는지 배우고 싶다.
// 그럴때는 useEffect를 쓴다
// useEffect는 component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어줄거다.
// useEffect는 실행시키고자 하는 함수와 React.js가 이벤트를 주시하게끔 하는dependency로 이루어져있다. 
// 즉, 내가 원하는 부분을 지정하여 그 부분만을 변화시킬 수 있는 것이다.

// useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
// props: 태그의 속성 값을 함수의 argument 처럼 컴포넌트에 값을 전달해준다.
// useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi");
    // cleanup function
    // component가 destory될 때 뭔가를 할 수 있게 해준다
    // ex. component가 없어질 때 어떤 분석 결과를 보낼 수 있다
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>
}

// 이렇게 해도 된다.
// function Hello() {
//   function byFn() {
//     console.log("bye :(");
//   }
//   function hiFn() {
//     console.log("hi :)");
//     return byFn;
//   }
//   useEffect(hiFn, []);
//   return <h1>Hello</h1>
// }

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run  when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run  when 'keyword' & 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <hr />
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>

    </div>
  );
}

export default App;