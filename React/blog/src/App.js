import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // state에 데이터를 저장하면 state가 변경될 때 HTML이 자동으로 rerendering
  let [firstTitle, firstEditTitle] = useState('Osusume Menu');
  let [secondTitle, secondEditTitle] = useState(['Osusume Menu2', 'Signature Menu']); 
  let [thirdTitle, thirdEditTitle] = useState('Galbijjim');

  let [title, editTitle] = useState(['GyuDong', 'Ramen', 'Tenpura']);
  let [like, editLike] = useState(0);
  // editLike(10);

  const changeMenu = () => {
    let temp = [...title];
    temp[0] = temp[0] === 'GyuDong' ? 'ButaDong' : 'GyuDong';
    editTitle(temp);
  };

  let posts = 'The best diner'; // 데이터 바인딩이 매우 쉽다
  // document.getElementById().innerHTML = ''
  function sol () {
    return 100
  };
  let s1 = { color : 'blue', fontSize : '30px'};

  return (
    <div className="App">
      <div className='JSX'>
        <div className='black-nav'>
          <div style={ { color : 'blue' , fontSize : '30px'} }>Holy</div>
        </div>
        <h4 className={ posts }> { posts } </h4>
        <h5 style={ s1 }> { sol() } </h5>
        {/* <img src={ logo } /> */}
      </div>
      
      <div className='state'>
        <div className='list'>
          <h3> { firstTitle } </h3>
          <p>published on Feb, 17th</p>
          <hr/>
          <h3> { secondTitle } </h3>
          <p>published on Feb, 10th</p>
          <hr/>
          <h3> { thirdTitle } </h3>
          <p>published on Jan, 14th</p>
          <hr/>
        </div>
      </div>

      <div className='eventListener'>
        <div className='list'>
          <h3> { title[0] } <span onClick={ () => { editLike(like++) } }>?</span> { like } </h3>
          <p>published on Feb, 17th</p>
          <hr/>
          <h3> { title[1] } </h3>
          <p>published on Feb, 10th</p>
          <hr/>
          <h3> { title[2] } </h3>
          <p>published on Jan, 14th</p>
          <hr/>
          <button onClick={ changeMenu }> Button </button>
        </div>
      </div>

      <div className='modal'>
        <Modal></Modal>
        <Modal />
      </div>
    </div>
  );
}

function Modal () {
  return (
    <div className='modalDetail'>
      <h2> Title </h2>
      <p> Date </p>
      <p> Description </p>
    </div>
  )
}

export default App;
