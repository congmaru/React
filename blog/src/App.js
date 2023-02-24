import { useState } from 'react';
import './App.css';

function App() {
  // a는 state 내용. b는 state 변경을 도와주는 함수
  let [a, b] = useState(['봄 코트 추천', '광주 맛집', '리액트 독학']);
  let [좋아요, like] = useState(0);

  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{a[0]} <span onClick={ () => {like(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>2월 24일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>2월 24일 발행</p>
      </div>
      <div className='list'>
        <h4>{a[2]}</h4>
        <p>2월 24일 발행</p>
      </div>
    </div>
  );
}

export default App;


