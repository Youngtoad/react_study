import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        {/* 주석 작성하는 법~ 
        두개 이상의 태그는 감싸자!!*/}
        <Hello name='react' color='red' isSpecial={true}
          //주석 작성법 ㅎㅎ 태그는 무조건 닫혀있어야함!!
        />
        <Hello color = 'pink' />
      </Wrapper>
    </>
  );
}

export default App;
