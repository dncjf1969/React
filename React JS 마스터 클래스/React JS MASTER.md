# React JS MASTER

### #2 STYLED COMPONENTS

2.1) our First Styled Component

```
sytled component 설치
$ npm i styled-components
```

app.js

```
import styled from "styled-components"; 을 해준다.
```

```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Hello</Text>
      </BoxOne>
      </BoxTwo>
    </Father>
  );
}

export default App;
```

index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```



2.2) adapting and Extending

```
props
= 컴포넌트에 데이터를 보내는 방식.
```

app.js

```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor}; #속성을 직접 넣고 싶을 때
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)` #컴포넌트를 확장하고 싶을 때
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
```



2.3) 'As' and Attrs

```
<component 특성을 바꾸고 싶은데, style은 그대로 두고 싶을 때>
= as
ex. button -> a tag
	<Btn as="a" href="/">Login<Btn>


<속성을 지정해서, 만들때마다 넣고 싶을 때>
= attrs
ex. const Input = styled.input.attrs({ required: true, minLength:10 })`
		background-color:tomato;
	`;
```

App.js

```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
```



2.4) Animations and Pseudo Selectors

```javascript
<styled component 안에서 animation을 주는 방법>
= helper function을 import 해주는 것.
ex.
const rotationAnimation = keyframes`
	0% {
		tranfrom: rotate(0deg);
		border-radius:0px;
	}
	50% {
		border-radius:100px;
	}
	100% {
		transform: rotate(360deg);
		border-radius:0px;
	}

`;

const Box = styled.div`
	height: 200px;
	width: 200px;
	background-color: tomato;
	animation: ${rotationAnimation} 1s linear infinite;
`;
```

App.js

```javascript
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🤩</span>
      </Box>
    </Wrapper>
  );
}

export default App;
```



2.5) Pseudo Selectors part Two

```
<styled component 안의 element를 선택하는 다른 방법>
styled component 자체를 타겟팅할 수 있다.

ex.
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  ...
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}
```

App.js

```javascript
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
```



2.6) super Recap



2.7) Themes

```
right mode / dark mode
right mode / dark mode를 만들고 싶다면 property들의 이름이 똑같아야 한다.
```

index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    {/* <ThemeProvider theme={lightTheme}> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

App.js

```javascript
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
```



### #3 TYPESCRIPT

3.0) Introduction

```
<TypeScript>
= JavaScript를 기반으로 한 프로그래밍 언어다.
= function, array 같은 문법은 같다. 살짝 코드가 더 추가된 것음.
= TypeScript는 strongly-typed 언어이다.
= strongly-typed란, 프로그래밍 언어가 작동하기 전에 type을 확인한다는 것이다.

ex.
const plus = (a,b) => a + b;
javascript에서는 ab로 나온다.
typescript에서는 a와 b의 데이터 타입이 뭔지 알려달라고 한다.
= const plus = (a:number, b:number) => a + b;
이것이 typescript 코드다.
이 두 부분만 빼고 99%는 그냥 JavaScript 코드다.

typescript가 작은 실수로 부터 우리를 보호해주고, 이후는 Javascript처럼 작동한다.
브라우저는 typesript를 이해하지 못하기 때문에
사용자에게 publish 해야할 때, typescript가 compile해서 평범한 JavaScript로 만들어줌.
```



3.1) Definitely Typed

```
<typescript 설치>
$ npx create-react-app my-app --template typescript
or
$ yarn create react-app my-app --template typescript

<styled-components 설치>
$ npm i --save-dev @types/styled-components

<react가 설치된 상태에서 typescript 설치>
$ npm i --save typescript @types/node @types/react @types/react-dom @types/jest @types/styled-components

<안되는 경우>
1. package-lock.json 과 node_modules 삭제하기
2. package.json 파일 안에 있는 패키지들의 모든 버전을 니꼬샘 깃헙과 똑같이 맞추세요. (저는 react-scripts의 버전이 갑자기 0.9.x로 내려가 있었습니다.)
3. npm i로 다시 node_modules와 package-lock.json 파일을 복구
4. npm start 명령어로 실행이 제대로 되는지 확인

```



3.2) Typing the Props

```
<TypeScript에게 React component를 어떻게 설명하는가>
"component를 type해보자"
= component에게 type을 준다는 뜻.
= TypeScript에게 뭐가 뭔지 설명해줄 수 있다는 것.

prop types는 prop이 거기 있는지 없는지를 확인해주지만, 코드를 실행한 '후'에만 사용가능함
우리가 TypeScript를 사용하는 이유는 코드가 실행되지 '전'에 오류를 확인하기 위해서다.
우리는 prop types를 사용하는 대신, prop들을 TypeScript로 보호해줄거다.

<interface>
object shape(객체 모양)을 TypeScript에게 설명해주는 TypeScript의 개념이다.
정리하자면, objectdml shape을 설명해준다.
우리가 타입스크립트에게 오브젝트 내의 데이터를 설명해주고 싶기 때문에 만든다.!!!!

ex.
interface CircleProps {
	bgColor: string;
}
// bgColor의 타입은 CircleProps의 object라고 말해주고 있는 것.
functiion Circle({ bgColor }: CircleProps) {
	return <Container />;
}
// bgColor는 string이 되어야 한다고 TypScript에게 말해줌.
// 그리고 이 bgColor는 object 안에서 발견됨.
// 이제 CircleProps의 타입이 뭔지 component에게 말해주면 됨.
	ex.1
	function Circle(props: CircleProps) {
      return <Container bgColor={props.bgColor} />;
    }
    ex.2
    function Circle({ bgColor }: CircleProps) {
      return <Container bgColor={bgColor} />;
    }
```

Circle.tsx

```tsx
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```

App.tsx

```tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```

index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```



3.3) Optional Props

```
<default prop>
= required가 생략되어 있음
ex.
	interface CircleProps {
		bgColor: string;
	}
	
<optional prop>
= 뒤에 ?만 붙이면 된다.
= 없을 수도 있다는 뜻
ex. 
	interface CircleProps {
		borderColor?: string;
	}

추가) 
만약 undefined 된 상태라면 00을 값으로 보낸다. (?? 00 입력)
ex. 
function Circle({ bgColor, borderColor }: CircleProps) {
	return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

<?? (Null 병합 연산자: Nullish coalescing operator)>
??앞에 값이 null이거나 undefined이면 오른쪽 값을, 그렇지 않으면 왼쪽 값을 반환하는 논리연산자
null ?? "hello" // "hello"
undefined ?? "hello" // "hello"
"hi" ?? "hello" // "hi"
```

Circle.tsx

```tsx
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
```

App.tsx

```tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

export default App;
```



3.4) State

```
<state>
component를 업데이트하고 싶다면 state를 바꿔야 한다는 걸 이미 알고 있다.
그리고 state를 바꾼다면 React.js가 우리의 component를 새로고침 해줄거다.
state에 접근하기 위해 useState hook을 사용함.

typescript에서 useState의 value가 string 또는 number 타입이 되길 원한다면, 
useState<number|string>(0);
이렇게 해주면 된다.
```

Circle.tsx

```tsx
import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  const [value, setValue] = useState<string>("");
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
```

App.tsx

```tsx
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;
```



3.5) Forms

```
<event들에 타입을 추가하는 법>
ex.	const onChange = (evebt:React.FormEvent) => {};
= FormEvent 내에서 우린 한 Element를 보낼 수 있다.
= 이 상황에서는 우린 어떤 종류의 Element가 이 onChange 이벤트를 발생시킬지를 특정할 수 있다.

ex. const onChange = (event:React.FormEvent<HTMLInputElement) => {};
= 여기서, event는 form으로부터 왔다.
= 현재, 타입스크립트는 이 onChange 함수가 InputElement에 의해서 실행될 것을 안다.
= HTMLInputElement가 이 이벤트를 만들고 발생시킨다.
```

App.tsx

```tsx
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
```



3.6) Themes

```
<Create a declarations file>
1. src안에 styled.d.ts파일 만들기
2. styled-components import하기
3. 내 styled components의 테마 정의를 확장하기
4. src안에 theme.ts 파일 만들기
5. index.tsx안에 ThemeProvider theme={darkTheme} 넣어주기

#styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}

#theme.ts
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};

export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};
```

App.tsx

```tsx
import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
	background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
	color: ${(props) => props.theme.textColor};
`;

function App() {
    return (
        <Container>
        	<H1>protected</H1>
        </Container>
}
export default App;
```

index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```



3.7) Recap

```
SyntheticEvent (합성 이벤트)
ReactJS는 이전에 우리가 보았다시피 자바스크립트의 실제 이벤트를 넘겨주는게 아니다. SyntheticEvent를 주는 것이다. 그리고 그건 기본적으로 ReactJS버전의 이벤트이다. 
이벤트 핸들러는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼 SyntheticEvent 객체를 전달받는다.

https://reactjs.org/docs/events.html
```



### #4 CRYPTO TRACKER



### #5 STATE MANAGEMENT



### #6 TRELLO CLONE



### #7 ANIMATIONS



### #8 NOMFLIX CLONE



### #9 GATSBY BONUS
