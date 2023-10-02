import React, { useState } from 'react';
import './App.css';
import BoardItem from 'components/BoradItem'
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/FavoriteItem';
import InputBox from 'components/InputBox';
import Footer from 'layouts/Fotter';

function App() {


  return (
    <>
      <Footer/>
    </>
  );
}

export default App;
