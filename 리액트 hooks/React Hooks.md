# React Hook

### #0 INTRODUCTION

0.2) introduction to Nooks

```
useTitle
= react document의 title 몇개의 hooks와 함께 바꾸는 것.

useInput
= input의 역할을 함

usePageLeave
= 유저가 page를 벗어나는 시점을 발견하고 함수를 실행한다.

useClick
= 누군가 element를 클릭하는 시점을 발견한다.

useFadein
= 어떤 Element든 상관없이 애니메이션을 Element 안으로 서서히 사라지게 만든다.

useFullScreen
= 어떤 Element든 풀스크린으로 만들거나 일반 화면으로 돌아가게 할 수 있다.

useHover
= 어떤 것에 마우스를 올렷을 때 감지한다.

useNetwork
= Online 또는 offline 상태인지를 감지한다.

useNotification
= notification API를 사용할 때 유저에게 알림을 보내준다.

useScroll
= 스크롤을 사용할 때를 감지해 알려준다.

useTabs
= 웹사이트에 메뉴 또는 무엇이든 간에 tab을 사용하기 위해 매우 쉽게 만들어준다.

usePreventLeave
= 유저가 변경사항이나 무엇이든 간에 저장하지 않고 페이지를 벗어나길 원할 때 확인을 하는 것.

useConfirm 
= usePreventLeave랑 비슷한데 어떤 기능이 더 존재한다.

useAxios
= HTTP request client axios을 위한 wrapper 같은 것이다.

```



0.3) requirements

```
codesandbox를 사용하자.
```



### #1 useState

유투브 강의 3개를 먼저 보고 와라 

https://www.youtube.com/playlist?list=PL7jH19IHhOLPDyuhF_fLCt_pKvtuLI5qX



+ 리액트 Hooks 10분만에 사용법 배우기

```
리액트 Hook으로 functional componentdptj state를 가질 수 있게 해준다.
앱을 리액트 훅으로 만든다면, class component, did mount, render... 이런 것들을 안해도 된다. 
모든 것은 하나의 function이 되는 것임.
지금까지 배운 useState와 useEffect 모두 react hook이다.
참고) https://reactjs.org/docs/hooks-effect.html
```



1.0) introduction to useState

```
<usestate>
usestate는 항상 2개의 value를 return한다.
첫번째 value는 state이고
두번째 value는 modifier이다.
useState() 안의 ()은 초기값을 설정할 수 있다.
useState를 사용할려면 import 해야 한다.
	ex. import {useState} from "react";
	
hooks가 새기기 전에 우리는 state를 함수형 component에 사용할 수 없었다.
우리가 state를 가지고 작업을 하고 싶으면 class Component 형태로 만들어야 했다. 하지만, hooks를 사용하면 그런거 신경 안써도 됨.
return에다가 뿌려주고 그 위에 적어주기만 하면 됨.
```

hook을 사용한 계산기

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App =() => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className='App'>
      <h1>Hello</h1>
      <h3>{item}</h3>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};


 
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

```

hook을 안쓰고 만든 계산기(class Component)

```javascript
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';

class AppUgly extends React.Component{
  state = {
    item : 1
  }
  render() {
    const {item} = this.state;
    return(
      <div className='App'>
        <h1>hello {item}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrement</button>    
      </div>
    );
  } 
  incrementItem = () => {
    this.setState(state => {
      return {
        item : state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState(state => {
      return {
        item : state.item + 1
      };
    });
  };
}
const rootElement = document.getElementById('root');
ReactDOM.render(<AppUgly />, rootElement);
```

= hook을 쓰는 게 훨씬 더 좋다.



1.1) useInput

```
useinput은 input을 업데이트한다.
```

최종 코드

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  };
  return {value, onChange};
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder='Name' {...name} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

```



1.2) useInput part two

```
<useInput에 유효성을 검증하는 기능을 포함시켜보자>
이름 길이를 10자로 제한해보겠다.
참고로 이건 hook과는 관계없다.
단지, function을 더 이쁘게 만드는 걸 배워본 것임.
우리 function은 검증기능을 가지고 있다.

[React Hook "useState" 오류 해결법]
React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?

위와 같은 에러가 떴을 때 아래와 같이 useState()를 최상단으로 이동시켜주시면 됩니다.
*최상위(at the Top Level)에서만 Hook을 호출해야 합니다.
```

최종 코드

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return {value, onChange};
};

const App = () => {
  const maxLen = value => value.length <= 10 && !value.includes("@");
  
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder='Name' {...name} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```



1.3) useTabs

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const content = [
  {
    tab: "Section 1",
    content: "i'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "i'm the content of the Section 2",
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);  
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

```



### #2 useEffect

2.0) introduction to useEffect

```
useEffect()는
componentDidMount(), componentDidUpdate(), componentWillUnmount() 의 역할을 한다.
useEffect는 2개의 인자를 받는다.

첫번째 인자는 function으로서의 effect이다.
■ componentDidMount()와 기능이 비슷함

2번쨰 인자는 dependency[]이다.
■ useEffect()가 deps리스트에 있는 값이 변할 때만 실행되게 함
■ componentDidUpdate()와 기능이 비슷함
component가 Mount되었을 때 실행시키고 그러고 나서 어떤 경우에도 실행시키고 싶지 않다면 빈 dependency[]를 전달해주기만 하면 된다.  
```

최종코드

```javascript
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0)
    const [aNumber, setAnumber] = useState(0)
    useEffect(sayHello, [number]);
    return (
    <div className="App">
      <div>Hi</div>
      <button onClick = {() => setNumber(number + 1)}>{number}</button>
      <button onClick = {() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

```



2.1) useTItle



2.2) useClick



2.3) useConfirm & usePreventLeave



2.4) sueBeforeLeave



2.5) useFadeIn & useNetwork



2.6) useScroll & useFullscreen



2.7) useNotification



2.8) useAxios



2.9) conclusions



2.10) publishing to NPM



2.11 What to learn next