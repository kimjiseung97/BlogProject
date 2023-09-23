import React from 'react';
import './App.css';
import BoardItem from 'components/BoradItem'
import { latestBoardListMock } from 'mocks';

function App() {
  return (
    <>
      {latestBoardListMock.map(boardListItem=> <BoardItem boardListItme={boardListItem} />)}
    </>
  );
}

export default App;
