# React

### \#2 THE BASICS OF REACT

#2.1 Before React

```html
<버튼을 몇번 클릭했는지 세는 어플>
1. HTML을 만든다.
    ex)
    <body>
    <span>Total clicks: 0</span>
    <button id="btn">Click me</button>
  </body>
2. JS에서 가져온다.
    ex)
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
3. event를 감지한다.
    ex)
    button.addEventListener("click", handleClick);
4. 데이터를 업데이트 한다.
    ex)
    counter = counter + 1;
5. HTML을 업데이트한다.
    ex)
    span.innerText = 'Total clicks: ' + counter;

#index.html
 <body>
    <span>Total clicks: 0</span>
    <button id="btn">Click me</button>
  </body>
  <script>
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    function handleClick() {
      counter = counter + 1;
      span.innerText = 'Total clicks: ' + counter;
    }
    button.addEventListener("click", handleClick);
  </script>
</html>

<React로 만들어보자>
- react JS 설치
#vanilla.html
ex)
<!DOCTYPE html>
<html>
  <body></body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
</html>
```



#2.2 Our First React Element

```html
<React 불러오는 방식>
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
- 리액트를 import했기 때문에 createElement function을 가진 리액트 object에 접근 가능
- const span 그러나 createElement(“span”) 은 반드시 생성하고자 하는 HTML 태그와 똑같아야함
    
<React JS element를 어떻게 생성하는가>
- React JS가 HTML을 생성할 것이다. 
- 이를 위해서는 react-dom을 사용해야 한다. 
   

*React JS - 어플리케이션이 아주 인터랙티브하도록 만들어주는 library. 엔진과 같다.
*React-dom - library 또는 package. 모든 react element들을 HTML body에 둘 수 있도록 해줌.
*ReactDOM.render() - render의 의미는 react element를 가지고 HTML로 만들어 배치한다는 것. 즉, 사용자에게 보여준다는 의미
*ReactDOM.render(span, span이 가야할 위치)
-> 그래서 보통 body에 id=“root” 만들어서 span을 root 안에 두라고 함
*React.createElement("span", {span의 property}, “span의 내용”)
-> property는 class name, id도 가능 style도 가능
-> 참고만 하고 외우지 말기. 이렇게 쓸 일 없음
    
ex)
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
   
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script>
    const root = document.getElementById("root");
    const span = React.createElement("span", {id: "sexy-span", style: {color:'red'}}, "Hello, i'm a span");
    ReactDom.render(span, root);
  </script>
</html>
    
<정리>
바닐라JS는 HTML -> JS 순서
리액트는 JS -> HTML 순서

JS가 element를 생성하고 React JS가 그것을 HTML로 번역하는 것
React JS는 업데이트 해야 하는 HTML을 업데이트 할 수 있음
```



#2.3 Events in React

```html
<버튼 만들기>
- button에서 일어나는 event 감지
- const의 이름은 HTML의 태그 이름과 반드시 일치할 필요는 없다.
- React.createElement("element", property, "content"); 순으로 들어가야 한다.
    => 각각의 argument를 체크!!!
- React에서는 property에다가 event listener를 등록할 수 있다.
- JS에서는 "click", React JS에서는 on => 그렇게 해야 React JS에게 우리가 event listener를 생성한다고 알려줄 수 있다.
    
ex)
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script>
    const root = document.getElementById("root");
    const h3 = React.createElement(
        "h3",
        {
      		onmouseenter: () => console.log("mouser enter"),
    	},
        "Hello, i'm a span"
    );
    const btn = React.createElement(
        "button", 
        {
      		onClick: () => console.log("i'm clicked"),
    	},
        "click me"
    );
    const container = React.createElement(
        "div",
        null,
        [h3, btn]
    );
    ReactDOM.render(container, root);
  </script>
</html>
    
//이렇게 JS로 element를 생성하고 React JS가 그것을 HTML로 바꾸는 것.
   	1. createElement
    2. HTML 태그 선택
    3. event 등록
    
<정리>
//interactive한 어플리케이션에서 하는 작업들 모두가 event들을 감지하는 일!!!!
//addEventListener를 반복하는 것 대신에 property에서 event를 등록할 수 있게 됨.
    ex. onClick: () => console.log("i'm clicked"),
```



#2.4 Recap

```
<총복습>
1. React JS와 ReactDOM 코드 import 하기
	1) React JS를 쓰는 이유
		= interactive하기 때문
	2) ReactDOM을 쓰는 이유
		= React element들을 가져다가 HTML로 바꾸는 역할을 하기 때문
			ex. <div id="root"></div>
				= 이 비어있는 div는 ReactDOM이 React element들을 가져다놓을 곳이다.
			ex. const root = document.getElementById("root");
				= root div를 가져온 후에, 
			ex. ReactDOM.render(container, root);
				= ReactDOM.render를 했다.
				= 이 코드의 의미는 React element들을 root div 안에서 보여주라는 뜻이다
				
	// 사실 React개발자로서 createElement를 쓸 일은 없다.
	// 좀 더 쉬운 방법이 있다.
	// 그러나, 이것은 React JS의 기초이므로 짚고 넘어간다.
	
2. ReactDOM은 container element를 root div안에 Render한다.
```



#2.5 JSX

```html
<React element를 생성하는 더 편리한 방식>
= createElement를 대체할 수 있는 방법
= 개발자들에게 좀 더 편리한 도구를 제공하기 위함
= 그 편리한 도구는 JSX!!!!!
= JSX – 자바스크립트를 확장한 문법
= 보통의 HTML과 비슷. 그러나 property를 HTML 태그의 속성처럼 적으면 됨
= JSX로 React 요소를 만드는 게 굉장히 편하다.
ex.
const Title = (
      <h3
        id="title" onMouseEnter={() => console.log("mouse enter")}>
          Hello, i'm a title
      </h3>
    );

const Button = (
      <button
        style={{
          backgroundColor: "tomato"
        }} 
        onClick={() => console.log("i'm clicked")}
        >
        Click me
      </button>
    );


//style={{ backgroundColor: "tomato" }} -> 스타일은 {} 2개임
//JSX를 브라우저가 온전히 이해하지 못하므로 이해할 수 있게
//https://unpkg.com/@babel/standalone/babel.min.js 를 설치해야함
    - 이걸 하는 데에 Babel을 사용 할 것.
 	- Babel은 코드를 변환해주는 녀석인데
	- JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔줌
    
//바벨을 가져온 뒤 script type="text/babel"로 적어줘야 인식함
```



#2.6 JSX part Two

```
<앞의 코드들을 다른 방식으로 만들어보자>
= 컴포넌트를 다른 컴포넌트 안에 넣기

먼저, div에 const 넣기 위해선
1. const를 함수로 만들어 줘야함 const Btn = () => ( );
	-> arrow function 이라고 부름
	const Title = () => ( ); 는 function Title() { return ( ); } 와 같음
2. HTML 태그처럼 만들어서 넣어줌
	ex)
	const Container = (
      <div>
        <Title />
        <Button />
      </div>
    );
    
	= (중요) 컴포넌트의 첫 글자는 반드시 대문자여야 함
	= 만약 소문자면 React랑 JSX는 이게 HTML button 태그라고 생각할 것임.
	ex)
	<Title />
    <Button />
	->우리가 직접 만든 요소는 전부 대문자로 시작해야 함
	
//JSX는 어플리케이션을 여러가지 작은 요소로 나누어 관리할 수 있게 해준다.
```



### \#3 STATE

\#3.0 Understanding State

```html
<state>
데이터가 저장되는 곳

<어떻게 하면 React.js 어플에 값이 바뀔 데이터를 담아줄 수 있을까>
*계산기 만들기
- 이벤트리스너가 countUp 함수를 호출하고 countUp은 카운트를 바꿔줄 것임.
ex) 
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    let counter = 0;
    function countUp () {
      counter = counter + 1;
      render();
    }
    function render() {
      ReactDOM.render(<Container />, root);
    }
    const Container = () => (
      <div>
        <h3>Total clicks: {counter}</h3>
        <button onClick={countUp}>Click me</button>
      </div>
    );
    ReactDOM.render(<Container />, root);
  </script>
</html>
    
<정리>
// 우리는 데이터가 바뀔때마다 Container를 리렌더링 해줬다.
// React JS는 바뀐 부분만 업데이트 해준다. 
// 하지만 지금 이 방식은 계속해서 render 해주는 걸 잊으면 안되기 때문에 최고의 방법은 아니다.
```



#3.1 setState part One

```
<리액트JS에서 데이터를 저장시켜 자동으로 리렌더링을 일으킬 수 있는 방법>
ex)
const root = document.getElementById("root");
    function App () {
      const data = React.useState(0);
      console.log(data);
      return (
        <div>
          <h3>Total clicks: 0</h3>
          <button>Click me</button>
        </div>
      );
    }
      
    ReactDOM.render(<App />, root);
    
//const data = React.useState();를 console.log 시키면
console에 [undefined, f ] -> undefined와 함수가 적힌 배열이 나타남

//undefined는 data이고 f는 data를 바꿀 때 사용하는 함수
//React.useState() 함수는 초기값을 설정할 수 있음
	ex. const data = React.useState(0);

//즉, undefined는 초기값이고 두 번째 요소인 f는 그 값을 바꾸는 함수

<배열 꺼내기>
const food = ["tomato", "potato"]
const [myFavFood, mySecondFavFood] = food;
으로 꺼낼 수 있음

<다음 수업>
어떻게 modifier를 이용해서 counter의 값을 바꿔줄지
그리고 왜 modifier가 필요한지 배워보자.
```

최종 코드

```html
#index.html

<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App () {
      const [counter, modifier] = React.useState(0);
      return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button>Click me</button>
        </div>
      );
    }
      
    ReactDOM.render(<App />, root);
  </script>
</html>
```



#3.2 setState part Two

```
<지난 강의>
React.js가 data를 담는 것과 업데이트 하는 걸 어떻게 도와주는 지 배움.
useState를 사용하면 우리한테 배열 하나를 주는데 
그 배열의 첫번째 요소는 우리가 담으려는 data 값이고
두번째 요소는 이 data 값을 바꿀때 사용할 modifier이다.

<왜 modifier가 필요한가>
```

최종코드

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App () {
      const [counter, setCounter] = React.useState(0);
      const onClick = () => {
        setCounter(counter + 1);        
      };
      return (
        <div>
          <h3>Total clicks: {counter}</h3>
          <button onClick={onClick} >Click me</button>
        </div>
      );
    }
      
    ReactDOM.render(<App />, root);
  </script>
</html>

```

#3.3 Recap

```
<이전강의>
컴포넌트 안에서 데이터를 어떻게 바꾸는지 배움.
또, 우리가 데이터를 룰에 맞춰 변경했을 때 
React가 화면을 어떻게 refresh하는지 알아봤다.
modifier 함수를 이용해서 컴포넌트의 state를 바꿀 때
컴포넌트는 새로운 값을 가지고 다시 한번 렌더링한다.

이것이 React가 제공하는 가장 중점적인 부분이다!!!!
데이터가 바뀔때마다 컴포넌트를 리렌더링하고 UI를 refresh함.
즉, modifier 함수를 이용해서 state를 바꾸면, 이 컴포넌트가 재생성되고 코드가 다시 한번 실행된다. 그리고 return도 한번 더 실행된다.
```



#3.4 State Functions

```
<이번 시간>
사용자들의 input을 어떻게 얻는지, 
form을 만들었을 때 state는 어떤 식으로 작용하는지에 대해 배워보자.

state를 바꾸는 방법은 2가지가 있다.
1. setCounter를 이용해서 우리가 원하는 값을 넣어주는 것.
	ex.
	function App () {
      const [counter, setCounter] = React.useState(0);
      const onClick = () => {
        setCounter(987);        
      };
      
2. 이전값을 바탕으로 현재 값을 성정하는 것.
	ex.
	function App () {
      const [counter, setCounter] = React.useState(0);
      const onClick = () => {
        setCounter(counter + 1);        
      };
      
3. 만약 우리가 현재값을 가지고 계산을 해야 한다면,
    ex.
     function App () {
          const [counter, setCounter] = React.useState(0);
          const onClick = () => {
            setCounter((current) => current + 1);
          };

= 이제 이 함수가 뭘 return 하든지 그게 새로운 state가 된다.
= 이게 더 안전함.
= 현재 state를 기반으로 계산을 하고 싶다면, 함수를 이용할 수 있다.

<다음 강의>
unit converter를 만들거다.
ex. 우리가 분 단위를 넣으면 그걸 시간 단위로 값을 출력해 주는 것.
```



#3.5 Inputs and State

```html
<이번 강의>
unit converter를 만들어보자.
ex. 분을 초로
ex. 킬로미더에서 마일로

<JSX>
JSX는 HTML과 매우 비슷하다.
but, 
JSX는 class를 쓰면 안된다. => className을 쓸것!
JSX는 for를 쓰면 안된다. => htmlFor을 쓸것.

<minutes에 필요한 state 만들기>
React JS에서 input은 uncontrolled라고 알려져 있다.
즉, 여기 input의 value는 우리가 통제할 수 없단 말.
useState를 만들고
	ex. const [minutes, setMinutes] = React.useState()
input에 value를 추가해준다.
	ex.<input value={minutes} id="minutes" placeholder="Minutes" type="number"  />
사용자가 다른 값을 입력할 때마다 이 value를 업데이트 시키기 위해서는 event change를 해줘야 한다.
	ex. const onChange = () => {}
input에 onChange를 추가해준다.
	ex. <input value={minutes} id="minutes" placeholder="Minutes" type="number" onChange={onchange} />
이벤트 생성
    ex. 
<useState>
useState는 array를 제공한다. 그리고 그 첫번째 element가 현재의 값이 된다. 두번째 element는 modifier가 된다.

```

최종 코드

```
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App () {
      const [minutes, setMinutes] = React.useState()
      const onChange = (event) => {
        setMinutes(event.target.value);
      };

      return (
        <div>
          <h1>Super converter</h1>
          <label for="minutes">Minutes</label>
          <input value={minutes} id="minutes" placeholder="Minutes" type="number" onChange={onChange} />
          <h4>you want to convert {minutes}</h4>
          <label for="hours">Hours</label>
          <input id="hours" placeholder="Hours" type="number" />
        </div>
      );
    }
      
    ReactDOM.render(<App />, root);
  </script>
</html>


```



#3.6 ~ 3.8 State Practice

```
<useState>
useState로 array를 만든다. 
array의 첫번째 요소는 데이터이고, 
두번째 요소는 데이터를 수정하기 위한 함수다.
다음으로 우린 input의 value를 state로 연결해줬다. 
왜냐면 어디서든 input의 value를 수정해줄 수 있기 때문.

<onChange>
다음으로 우리는 onChange 함수를 만들었다. 
이 onChange 함수는 데이터를 업데이트 해주는 역할을 한다. 
input에서 listening하는 데이터를 업데이트 함.
이제 input은 스스로 업데이트를 한다. 
change 이벤트가 일어났을 때, 즉 사용자가 input에 뭔가를 써넣을때 onChange함수가 실행.
그럼 event.target.value를 얻게 되는데 바로 input value이다.
```

분을 초로, 초를 분으로 바꾸기(최종 코드)

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    function App () {
      const [amount, setAmount] = React.useState()
      const [flipped, setFlipped] = React.useState(false)
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0)
      const onFlip = ()  => {
        reset();
        setFlipped((current) => !current);
      };    
      return (
        <div>
          <h1>Super converter</h1>
          <div>
            <label for="minutes">Minutes</label>
            <input value={flipped ? amount*60 : amount} id="minutes" placeholder="Minutes" type="number" onChange={onChange} disabled={flipped}/>  
          </div>    
      
          <div>
            <label for="hours">Hours</label>
          
            <input value={flipped ? amount : amount/60} id="hours" placeholder="Hours" type="number" onChange={onChange} disabled={!flipped} />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onFlip}>Flip</button>
        </div>
      );
    }
      
    ReactDOM.render(<App />, root);
  </script>
</html>


```



#3.9 Final Practice and Recap

```
app 컴포넌트
= 모든 state와 코드들을 실행하고 렌더링하는 컴포넌트
컴포넌트는 그 안에 또 다른 컴포넌트를 렌더링할 수 있다.
root div를 그려준다.
가장 중요한 컴포넌트!!!!!
app 컴포넌트가 새로운 두개의 컴포넌트를 갖는 것 보다는 state를 만들어 그 안에 넣자.
```

최종 정리

```jsx
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function MinutesToHours() {
      const [amount, setAmount] = React.useState()
      const [flipped, setFlipped] = React.useState(false)
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0)
      const onFlip = ()  => {
        reset();
        setFlipped((current) => !current);
      };
      return (
        <div>
          <div>
            <label for="minutes">Minutes</label>
            <input value={flipped ? amount*60 : amount} id="minutes" placeholder="Minutes" type="number" onChange={onChange} disabled={flipped}/>  
          </div>    
      
          <div>
            <label for="hours">Hours</label>
          
            <input value={flipped ? amount : amount/60} id="hours" placeholder="Hours" type="number" onChange={onChange} disabled={!flipped} />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onFlip}>Flip</button>
        </div>
      );
    };
    function KmToMiles() {
      return <h3>KM 2 M</h3>;
    }
    function App () {
      const [index, setIndex] = React.useState("xx");
      const onSelect = (event) => {
        setIndex(event.target.value);
      }
      return (
        <div>
          <h1>Super converter</h1>
          <select value={index} onChange={onSelect}>
            <option value="xx">Select your option</option>
            <option value="0">Minutes & Hours</option>
            <option value="1">Km & Miles</option>
          </select>
          <hr />
          {index === "xx" ? "Please select your units" : null}
          {index === "0" ? <MinutesToHours /> : null} 
          {index === "1" ? <KmToMiles /> : null}
        </div>
      );
    };
    const root = document.getElementById("root");  
    ReactDOM.render(<App />, root);
  </script>
</html>


```



### \#4 PROPS

\#4.0 Props

```
<지난 강의>
모든 JSX를 말 그대로 분리된 컴포넌트로 만들었다.
이것들이 우리를 '분할'해서 '정복'할 수 있도록 만들어준다.

<props>
props는 일종의 방식이다. 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 하는 방법.
props는 object이다.
```

최종 코드

```jsx
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function MinutesToHours() {
      const [amount, setAmount] = React.useState()
      const [flipped, setFlipped] = React.useState(false)
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0)
      const onFlip = ()  => {
        reset();
        setFlipped((current) => !current);
      };
      return (
        <div>
          <div>
            <label for="minutes">Minutes</label>
            <input value={flipped ? amount*60 : amount} id="minutes" placeholder="Minutes" type="number" onChange={onChange} disabled={flipped}/>  
          </div>    
      
          <div>
            <label for="hours">Hours</label>
          
            <input value={flipped ? amount : amount/60} id="hours" placeholder="Hours" type="number" onChange={onChange} disabled={!flipped} />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onFlip}>Flip</button>
        </div>
      );
    };
    function KmToMiles() {
      return <h3>KM 2 M</h3>;
    }
    function Btn({text}) {
      return <button style={{
        backgroundColor: "tomato",
        color:'white',
        padding: '10px 20px',
        border:0,
        borderRadius:10,
      }}>{text}</button>
    }
    function ConfirmBtn() {
      return <button >Confirm</button>
    }
    function App () {
      return (
        <div>a
          <Btn text="Save Changes"/>
          <Btn text="Continue" />
        </div>
      );
    };
    const root = document.getElementById("root");  
    ReactDOM.render(<App />, root);
  </script>
</html>


```



#4.1 Memo

```
1. props에 function도 보낼 수 있음
이것은 JSX로 html 태그 자체에 이벤트 리스너를 넣는것과는 전혀 다른 것임.
그저 이벤트를 실행시키는 함수가 프로퍼티로 들어간 것임.
prop은 그냥 부모에서 자식으로 데이터를 넘길 때 사용하는 argument의 역할이니까!

2. (07:41~) 부모의 상태를 바꾸는 함수를 만들었고, 부모 컴포넌트에서 그 함수를 prop으로 보내면 자식 컴포넌트에서 그 함수가 실행된다.

3. 불필요한 re-render는 React.memo()로 관리할 수 있음
부모 컴포넌트의 state를 변경하면 당연히 그 자식 컴포넌트들도 Re-render가 일어남. 불필요한 렌더링이 발생할 수도 있는데, 이 경우에는 React.memo()로 prop의 변경이 일어난 부분만 렌더링 시킬 수 있음. 아주 많은 자식 컴포넌트를 가지고 있는 부모 컴포넌트일 때 사용하면 될듯.

* React.memo()
컴포넌트가 React.memo()로 wrapping 될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.
```

최종 코드

```jsx
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function MinutesToHours() {
      const [amount, setAmount] = React.useState()
      const [flipped, setFlipped] = React.useState(false)
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0)
      const onFlip = ()  => {
        reset();
        setFlipped((current) => !current);
      };
      return (
        <div>
          <div>
            <label for="minutes">Minutes</label>
            <input value={flipped ? amount*60 : amount} id="minutes" placeholder="Minutes" type="number" onChange={onChange} disabled={flipped}/>  
          </div>    
      
          <div>
            <label for="hours">Hours</label>
          
            <input value={flipped ? amount : amount/60} id="hours" placeholder="Hours" type="number" onChange={onChange} disabled={!flipped} />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onFlip}>Flip</button>
        </div>
      );
    };
    function KmToMiles() {
      return <h3>KM 2 M</h3>;
    }
    function Btn({text, changeValue}) {
      return <button 
        onClick={changeValue}
        style={{
          backgroundColor: "tomato",
          color:'white',
          padding: '10px 20px',
          border:0,
          borderRadius:10,
        }}>{text}</button>
    }
    const MemorizedBtn = React.memo(Btn)
    function App () {
      const [value, setValue] = React.useState("Save Changes");
      const changeValue = () => setValue("Revert Changes");
      return (
        <div>
          <MemorizedBtn text={value} changeValue={changeValue} />
          <MemorizedBtn text="Continue" />
        </div>
      );
    };
    const root = document.getElementById("root");  
    ReactDOM.render(<App />, root);
  </script>
</html>


```



#4.2 Prop Types

```
fontSize: fontSize -> 이름이 같기 때문에 그냥 fontSize 로 적어줄 수 있음
propTypes
-> 내가 어떤 타입이고 어떤 모양인 prop을 받고 있는지 체크해줌
Btn.propTypes = {
text: PropTypes.string,
fontSize: PropTypes.number,
};
-> text가 string이 아니면 오류를 console에서 보여줌

function Btn({ text, fontSize = 16 })
-> 정의되지 않은 변수에 관한 기본값 주는 것도 가능

<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script> 추가
= 내가 어떤 타입의 prop을 받고 있는지를 체크해준다.
```

최종코드

```jsx
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">   
    function Btn({text, fontSize=14}) {
      return <button 
        style={{
          backgroundColor: "tomato",
          color:'white',
          padding: '10px 20px',
          border:0,
          borderRadius:10,
          fontSize,
        }}>{text}</button>
    }
    Btn.propTypes = {
      text:PropTypes.string.isRequired,
      fontSize: PropTypes.number,
    };
    function App () {
      return (
        <div>
          <Btn text="Save Changes" fontSize={18} />
          <Btn text="Continue" fontSize={14} />
        </div>
      );
    };
    const root = document.getElementById("root");  
    ReactDOM.render(<App />, root);
  </script>
</html>


```



#4.3 Recap

```
<정리>
1. Prop 은 component 에 보내지는 argument 입니다.
2. PropType을 이용해서 보내지는 prop 에 type을 정의 할수 있습니다. 정의 하는 이유는 잘못된 type의 prop 이 보내지는 것을 방지하기 위해서 입니다. PropType을 정의 했을때 React는 에러메세지를 통해서 잘못된 type이 보내지고 있다고 알려줍니다.

<설정 가능한 컴포넌트>
마크업이나 스타일을 최대한 재사용할 수 있다
Btn 컴포넌트를 어떤 스타일로 설정했는데,
바꾸고 싶은 것은 button내에서 fontSize와 text 뿐.
그래서 복붙 대신, 어떤 prop들을 받을 수 있는 Btn 컴포넌트를 만든 것이다.
prop들을 단지 우리가 인자를 사용해 원하는 컴포넌트에 데이터를 보내기 위한 통로이다.
prop들은 렌더링 되고 있는 Btn 컴포넌트의 부모로부터 전달되고 있는 것이다.
그래서 우리의 Btn 컴포넌트들은 text, fontSize 두 개의 prop을 받고 있다.
이 Btn 컴포넌트의 prop들이 접근할 수 있는 방법은
Btn 컴포넌트 함수의 첫번째 인자 안에서 가능하다.
첫번째 인자에 전달된 모든 prop들을 하나의 오브젝트로서 받는 것이다.
Btn 컴포넌트의 prop들에게 접근하려면 prop.text 등으로 적어준다.
혹은 오브젝트 안 요소들을 쉽게 빼올 수 있는 ES6의 쉬운 방법을 써도 된다.
->Btn({ text })...
{text} 는
Btn(props)...
{props.text}와 같다.
prop을 전달할 때의 이름과 받아서 사용할 때의 이름은 동일해야한다.
```



### \#5  CREATE REACT APP

\#5.0 Introduction

```
<create-react-app>
리액트 어플리케이션을 만드는 최고의 방식
React JS 어플리케이션을 만드는 데 훨씬 쉽다.
엄청나게 많은 스크립트들과 사전 설정들이 있기 때문이다.

$ npx create-react-app my-app
$ code my-app(vscode 열기)
$ npm start

<src>
src폴더는 나의 모든 파일들을 넣을 폴더다.
<index.js>
src안에 있는 우리 코드를 가져다가 이 페이지의 어딘가로 넣어줄 것임.
```

index.js

```javascript
# 우리 어플리케이션을 렌더링 해줄 페이지.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

app.js

```javascript

function App() {
  return (
    <div>
      <h1>Welcome back!!!</h1>
    </div>
  );
}

export default App;
```



#5.1 Tour of CRA

button.js

```
$ npm i prop-types
```

```javascript
import propTypes from "prop-types";

function Button({text}) {
  return <button>{text}</button>;
}

Button.propTypes = {
  text:propTypes.string.isRequired,
};

export default Button;
```



```
React로 특정 컴포넌트를 위한 css파일을 만들 수 있다.
1) css 파일을 직접 만들 수 있다.
	ex.
	#style.css
	button {
      color: white;
      background-color: tomato;
    }
    
    #index.js
    import "./style.css";

2) 컴포넌트에 직접 CSS를 적용할 수 있다.
	ex.
	function Button({text}) {
      return <button style={{
        backgroundColor: "tomato",
        color:'white'

      }}>{text}</button>;
    }
    
3)CSS 모듈
= CSS코드를 javascript 오브젝트로 변환시켜준다.
	ex.
	#Button.module.css
	.btn {
      color: aqua;
      background-color: tomato;
    }
	#Button.js
	import propTypes from "prop-types";
    import styles from "./Button.module.css";

    function Button({text}) {
      return <button className={styles.btn}>{text}</button>;
    }

    Button.propTypes = {
      text:propTypes.string.isRequired,
    };

    export default Button;
    
    #App.module.css
    .title {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 18px;
    }
    #App.js
    import Button from "./Button";
    import styles from "./App.module.css";
    function App() {
      return (
        <div>
          <h1 className={styles.title}>Welcome back!!!</h1>
          <Button text={"Continue"}/>
        </div>
      );
    }

    export default App;

    
<정리>    
css 코드를 자바스크립트 객체로 변환시켜줌
import styles from "./~";

styles가 css 코드를 가지고 있는 객체로 넘어옴
따라서 해당 css코드에 작성된 class name(여기서는 btn)을 프로퍼티 접근 연산자(.)를 사용해서 이용가능해짐.

< Button style={styles.btn} / >
위와 같이 작성해서 해당 css 스타일링을 사용할 수 있음.

브라우저를 통해 html 코드를 확인해보면 해당 컴포넌트에 무작위의 class name이 붙음.
요소가 각각의 클래스네임을 가지게 돼서 일일이 class name을 기억해서 스타일링 할 필요가 없음
```



### \#6  EFFECTS

\#6.0 Introduction

```

const [counter, setValue] = useState(0);
-> 리액트 앱으로 하는 중이라 앞에 React 안붙여도됨


<useEffect>
state를 변경할 때 ‘모든’ code 들을 항상 다시 실행됨
리렌더링 될 때마다 반복실행되어도 괜찮은 코드도 있을 테지만,컴포넌트가 처음 render 될 때만 코드가 실행되길 원할 수도 있다.
첫 번째 render에만 코드가 실행되고 다른 state변화에는 실행되지 않도록 만들자
ex) API로 외부 데이터를 가져올 때 컴포넌트 처음 렌더링되는 그 순간에만 API 요청을 하고 이후에 state가 변화할 때는 그 API에서 똑같은 정보를 가져오고 싶지는 않을 것이다.
이렇게 특정 코드들이 첫번째 component render에서만 실행되게 하려면? => useEffect !!
```

app.js

```javascript
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

```



#6.1 useEffect

```
특정 코드의 실행을 제한하고 싶을 때(컴포넌트가 맨 처음 render될 때만 실행하도록 함)
useEffect를 쓴다.
<useEffect>
- 두 개의 argument를 가지는 함수
- 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
- 두 번째는 [] 배열을 넣어줌
-> useEffect가 컴포넌트의 첫 번째 렌더 시점에 iRunOnlyOnce 함수 호출
그리고 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
즉, 한번만 렌더링 됨
단순화 하여 useEffect(() => {
console.log("CALL THE API")
},[]); 써도 됨
즉, useEffect function은 쉽게 말해서 우리 코드가 딱 한번만 실행될 수 있도록 보호해준다.
```

app.js

```javascript
import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the time');
  useEffect(() => {
    console.log("call the api...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

```



#6.2 Deps

```
useEffect 글자를 타이핑할 때마다 API를 새로 호출하지 않고 한번만 호출해준다.

search keyword에 변화가 있을 때 만! marvel영화를 검색하고 싶을 때
즉, 특정한 코드만 변화했을 때 원하는 코드들을 실행할 수 있는 방법
-> useEffect(() => {
console.log("SEARCH FOR", keyword);
}, []);
이렇게 실행하면 1번만 됨
그리고 []자리에 keyword 써줌
-> keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것.
이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유임
react가 지켜볼 게 아무것도 없으니 처음 한번만 실행되는 것

useEffect(() => {
console.log("I run when 'keyword & counter' changes.")
}, [keyword, counter]);
-> 2개도 가능
```

app.js

```javascript
import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("i run only once");
  }, []);
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
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here....." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
```



#6.3 Recap

```
<useEffect 정리>
ex.
useEffect(() => {
    console.log("i run only once");
  }, []);
  
React.js는 새로운 정보를 자동적으로 refresh 해준 다는 점에서 편리하다.
하지만, 때로는 이러한 기능이 불필요할 때가 있다.
예를 들어, 검색창을 이용하는데 버튼 창이 리렌더링 되는 상황이 그렇다.
이렇게 불필요한 리렌더링을 피하기 위해 React.js가 따로 준비한 것이 바로 useEffect이다.
useEffect는 실행시키고자 하는 함수와 React.js가 이벤트를 주시하게끔 하는dependency로 이루어져있다. 즉, 내가 원하는 부분을 지정하여 그 부분만을 변화시킬 수 있는 것이다.
버튼을 누르면 버튼만, 검색창을 이용할 때는 검색창만 리렌더링 되는 것처럼 말이다.

• 리액트를 사용하는 이유: 최소 단위의 렌더링을 위해
• useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
• props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
• useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

🏴 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
🏴 propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능
```



#6.4 Cleanup

```
Hello 컴포넌트를 hide할 때는 컴포넌트가 스크린에서 지워지고
show를 누르면 컴포넌트가 다시 생성되므로
useEffect도 다시 실행됨을 알 수 있다.
-> 정해준 useEffect가 컴포넌트가 생성될 때 콘솔 로그를 하라는 것이기 때문
ex)
function Hello() {
useEffect(() => {
console.log("Hi");
}, []);

컴포넌트가 destroy될 때도 코드를 실행할 수 있다
-> return으로 함수를 만들어주면 된다.
useEffect는 함수를 받고, 이 함수는 dependency가 변화할 때 호출됨
현재는 dependency가 비어있으니 컴포넌트가 처음 생성될 때 함수가 호출된 후 다시
호출 되지 않음
그래서 컴포넌트가 파괴될 때도 함수를 실행하고 싶으면 useEffect 함수가 새로운 함수를 return해야 함
-> 왜냐면 deps가 비어있으면 자동으로 컴포넌트가 파괴될 때 cleanup함수가 실행되는데 그 과정이 리렌더링으로 useEffect함수가 실행되고 클린업하면서 이전에 있던 이펙트인 console.log(“created :) )가 삭제되고 새로운 이펙트 함수인 return함수가 실행되기 때문이다.
리렌더링 -> 이전 이펙트 클린업 -> 이펙트 실행


클린업: 새로 렌더링한 이후 실행된다.(불확실한 정보 => 초기값이 return null로 되어있다 생각하자)
- 이 때 렌더링은 값이 변하여 새로운 것을 그려주거나, 컴포넌트를 없애는 경우가 있다.
- useEffect는 리렌더링 이후 클린업을 마치고 실행된다.

ex) 디펜던시가 counter 일 경우(최초 counter는 0)
화면에 0이 렌더링 되어있는 상황에 counter가 1로 값이 바뀌면 "일단" 리렌더링을 한다.
이후에 0을 정리(클린업)한다, 그리고 useEffect가 실행된다.

ex) 디펜던시가 없을 경우
화면에 0이 렌더링 되어있고, 해당 컴포넌트를 지울 경우 일단 0을 지운다(리렌더링).
이후 정리(클린업)한다.
* 이 때 컴포넌트가 지워졌고 실행할 useEffect가 없기에 정리(클린업)만하고 끝난다.
```

app.js

```javascript
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
```



### \#7 [2021 UPDATE] PRACTICE MOVIE APP

\#7.0 To Do List part One

app.js

```javascript
import {useState} from "react";

function App() {
	const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return(
    <div>
      <h1>my to dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button >Add to do</button>
      </form>
    </div>
  );
}

export default App;
```



#7.1 To Do List part Two

```
map() 함수
-> 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌
map()은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
-> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
다만 기존의 배열에 접근할 수 없게됨
그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
map((item) => item.toUpperCase())
로 하면 item이 대문자로 바뀐 새로운 배열을 만들어줌

리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야함
map의 첫 번째 argument는 값이고 두번째는 index 즉 숫자를 의미함
그래서
{toDos.map((item, index) => {item})}
만들어줌

즉,
{{item},{item},{item}...}
배열을 만들어 각자 고유의 key를 가지게 함
```



app.js

```javascript
import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
```



#7.2 Coin Tracker

app.js

```javascript
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
```

추가 코드

```javascript

import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins,setCoins] = useState([]); 
  const [cost,setCost] = useState(1);
  const [need, setNeed] = useState(1);
  const onChange = (event) => {
    setCost(event.target.value);
    setNeed(1);
  }
  const handleInput = (event) => {
    setNeed(event.target.value);
  } 
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  },[]);
  return (
  <div>
    <h1>The coins!{loading ? "" :`Here are..${coins.length} coins`}</h1>
    {loading ? <strong>loading...</strong> : <select onChange={onChange}>
      <option>Select Coin!</option>
      {coins.map((coin , index) =>
      <option 
        key={index} 
        value={coin.quotes.USD.price} 
        id={coin.symbol}
        symbol = {coin.symbol} >
        {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
        </option>
       )}
    </select>}
    <h2>Please enter the amount</h2>
    <div>
      <input type="number" value={need} onChange={handleInput} placeholder="dollor"/>$
    </div>
    <h2>You can get {need/cost}</h2>
  </div>);
}
export default App;
```



#7.3 Movie App part One

```javascript
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
```



#7.4 Movie App part Two

src/components/Movie.js

```javascript
import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```

src/routes/Detail.js

```javascript
function Detail() {
  return <h1>Detail</h1>;
}
export default Detail;
```

src/routes/Home.js

```javascript
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
```

src/App.js

```javascript
function App() {
  return null;
}

export default App;
```



#7.5 React Router

```
React Router 설치할때. 아래 커맨드를 사용해주세요:

npm i react-router-dom@5.3.0
```

```
react-router-dom -> 쿨한 컴포넌트들의 집합 (ex. router, switch, route 등등)

path=“/” -> 홈화면으로 간다는 의미 (Home Route를 렌더링해줌)

BrowserRouter - > 일반적인 홈페이지 경로
HashRouter -> 앞에 /#/가 붙음

Router -> url에 따라 유저에게 보여주고 싶은 것들을 넣음.
Switch -> Route를 찾음 (Route를 찾으면 컴포넌트를 렌더링한다.)
Route -> URL을 의미
*Switch를 넣어준 이유는 한 번에 하나의 라우트만 렌더링 하기 위해서임
왜냐하면 리액트 라우트는 두 개의 라우트를 한번에 렌더링 하는것도 가능하기 때문

Link
-> 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
Link to="/Movie"{title}/Link이런 식으로 작성
*HTML <a> tag를 쓰면 전체 브라우저가 재실행되지만 React Link를 쓰면 재실행안된다.
*라우터 안에 컴포넌트만 넣어주면 리액트 라우터가 해당 경로일 때 그 컴포넌트를 보여준다.

<정리>
1) 더이상 Switch는 쓰이지 않는다(버젼 6이상). 이제 그역할은 Routes가 대신할 것이다 (공식문서 참조), 또한 Route 태그의 exact 속성도 더이상 쓰이지 않으며 Routes가 알아서 최적의 경로배정을 해주기 때문에 Switch를 썼을 때의 고민을 말끔히 해결해 준다

2) BROWSER ROUTER가 일반적인 방식이며, HASHROUTER는 잘 쓰이진 않는다(뒤에 #이런게 붙음)

3) 한 라우트에서 다른 라우트로 가고 싶을 땐 a태그의 href을 속성이 가장 먼저 생각이 날 것이고, 실제로도 그렇게 코드를 작성하면 이동이 가능하다. 하지만 페이지 전체가 새로고침되기 때문에 리액트의 장점을 깎아먹는다. 따라서 재실행되는 것을 막기 위해 react-router-dom에서 import한 link 태그를 사용하면 된다
```

app.js

```javascript
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return<Router>
    <Switch>
      <Route path="/hello">
        <h1>hello</h1>
      </Route>
      <Route path="/movie">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
```

최신버전(react-router-dom 6버전 이상일 경우)

 app.js

```javascript
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </Router>
    );
}

export default App;
```



src/component/Movie.js

```javascript
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```



```
react-router-dom v6이 v5.x과 달라진 점
https://alpaca92.notion.site/react-router-dom-4fc2c78083594edc9a04d73caa71aa38
```



#7.6 Parameters

```
url 뒤에 변수를 붙이려면
<Route path="/movie/:id"> 이렇게 해줘야 한다.
<Route path="/movie/id"> 라고 하면 id는 string이 된다.

<useParams>
id를 가져온다.
id를 통해 url의 상세정보를 알려줌.

<await>
await 함수는 asyn안에 있어야 사용가능하다
```

src/routes/Details.js

```javascript
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Detail() {
  const {id} = useParams();
  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
   ).json();
   console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
```

src/routes/Home.js

```javascript
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
```

src/components/Movie.js

```javascript
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```

src/App.js

```javascript
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return<Router>
    <Switch>
      <Route path="/hello">
        <h1>hello</h1>
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
```



#7.7 Publishing

```
github page에 deploy 해보자!!!

<gh-pages?>
결과물은 github pages에 업로드 할 수 있게 해주는 나이스한 패키지다.
$ npm i gh-pages

먼저, package.json에 있는 scripts를 확인하자.
package.json에는 build라는 script가 있다. 
이 script를 실행하면 우리 웹사이트의 production ready code를 생성하게 된다.
production ready란 코드가 압축되고 모든게 최적화 된다는 의미다.
$ npm run build

이제 이걸 github pages에 push해야 한다.
push하기 전에 package.json으로 가서 
1)
"homepage":"https://dncjf1969.github.io/react-for-beginners"를 추가한다.
(dncjf1969 = github username)
(react-for-beginners = 내 repository name)

2) "script"에 deploy를 추가한다.
deploy가 하는 일은 우리가 방금 설치한 gh-pages를 실행시키고 "build"라는 디렉토리를 가져가는 것임.
이후, predeploy command를 만들어 줄 것임. 그럼 내가 deploy를 실행시키면 predeploy가 자동으로 먼저 실행이 되고, predeploy는 npm run build를 실행시킨다.
"scripts": {
	"deploy": "gh-pages -d build",
	"predeploy": "npm run build"
}
이후, $ npm run deploy 실행.
다음에 내가 뭔가를 수정하고 업데이트를 하고 싶다면, 수정을 한 후 npm run deploy만 하면 된다.
```



#7.8 Conclusions

```
<잘만든 완성본>
https://github.com/10009ukk/react-movie
https://10009ukk.github.io/react-movie

https://keinn51.github.io/React_JS_Movie_Web_Nomad/
https://github.com/keinn51/React_JS_Movie_Web_Nomad
```



#7.9 Styles



#7.10 Next Steps

```
<Breaking Change>
버전을 업데이트하면서 코드가 깨져서 코드를 수정해야 하는 경우.

회사에서 일을 하거나, 다른 누군가 만든 코드를 사용하거나 언젠간 이런 코드를 마주하게 될 것.
그러나, React는 useState와 useEffect의 조합이 제일 좋다.
```





### \#14 ROUTING BONUS

\#14.0 Getting Ready for the Router

```
react-router-dom
= 네비게이션을 만들어주는 패키지
```



#14.1 Building the Router 

```
Route path="/" exact={true} componet={Home} /〉
※path ▷ 경로
※exact ▷ url이 path와 똑같을 때만 렌더링하게 함
※componet ▷ 렌더링할 component

<정리>
1) 더이상 Switch는 쓰이지 않는다(버젼 6이상). 이제 그역할은 Routes가 대신할 것이다 (공식문서 참조), 또한 Route 태그의 exact 속성도 더이상 쓰이지 않으며 Routes가 알아서 최적의 경로배정을 해주기 때문에 Switch를 썼을 때의 고민을 말끔히 해결해 준다

2) BROWSER ROUTER가 일반적인 방식이며, HASHROUTER는 잘 쓰이진 않는다(뒤에 #이런게 붙음)

3) 한 라우트에서 다른 라우트로 가고 싶을 땐 a태그의 href을 속성이 가장 먼저 생각이 날 것이고, 실제로도 그렇게 코드를 작성하면 이동이 가능하다. 하지만 페이지 전체가 새로고침되기 때문에 리액트의 장점을 깎아먹는다. 따라서 재실행되는 것을 막기 위해 react-router-dom에서 import한 link 태그를 사용하면 된다
```

App.js

```javascript
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return <span>something</span>;
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

최신버전(6버전 이상)

```javascript
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </Router>
    );
}

export default App;
```



#14.2 Building the Navigation

```
〈a href="/"〉Home〈/a〉 를
〈Link to ="/"〉Home〈/Link〉로 쓸 수 있으며,
이렇게 쓰면 새로고침 없이 페이지를 로딩할 수 있다.
※ Link는 router 밖에서 쓸 수 없다.
※ but, 모든 걸 router안 에서 할 필요는 없다.(ex. footer에서 해도됨.)

※BrowserRouter는 /#/가 없지만, github pages에 정확히 설정하기가 짜증난다.
※github pages에 업로드하고 싶을 때, HashRouter를 하는게 쉽다
```



src/components/Navigations.js

```javascript
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

src/components/Navigations.css

```css
.nav {
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;
}

.nav a {
  text-decoration: none;
  color: #0008fc;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
}

.nav a:not(:last-child) {
  margin-bottom: 20px;
}

.movies a{
display: contents;
text-decoration: none;
}
```

App.js

```javascript
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```



#14.3 Sharing Props Between Routes

```
라우터에 있는 모든 라우트들은 기본값으로 props들을 가진다.
〈Link to="/about"〉에서 to의 string을 object으로 교체하여 props를 보낼 수 있다.
```

App.js

```javascript
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
```

src/routes/Home.js

```javascript
import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
```

src/routes/Home.css

```css
.container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}

.movies {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 50px;
  padding-top: 70px;
  width: 80%;
}
```

src/routes/Detail.js

```javascript
import React from "react";

function Detail(props) {
  console.log(props);
  return <span>hello</span>;
}
export default Detail;
```

src/routes/About.js

```javascript
import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
      <span>− George Orwell, 1984</span>
    </div>
  );
}

export default About;
```

src/components/Navigation.js

```javascript
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

src/components/Navigation.css

```css
.nav {
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;
}

.nav a {
  text-decoration: none;
  color: #0008fc;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  font-weight: 600;
}

.nav a:not(:last-child) {
  margin-bottom: 20px;
}
```

src/components/Movie.js

```javascript
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
```

src/components/Movie.css

```css
.movies .movie {
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movie img {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie .movie__title,
.movie .movie__year {
  margin: 0;
  font-weight: 300;
}

.movie .movie__title {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
}

.movie .movie__genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 5px 0px;
}

.movie__genres li,
.movie .movie__year {
  margin-right: 10px;
  font-size: 14px;
}
```





#14.4 Redirecting 

App.js

```javascript
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
```

src/components/Movie.js

```javascript
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
```

src/routes/Detail.js

```javascript
import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
```

