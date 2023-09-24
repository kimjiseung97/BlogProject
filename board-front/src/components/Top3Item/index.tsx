import React from 'react'
import './style.css';
import defaultProfileImage from 'assets/image/default-profile-image.png';
import { BoardListItem } from 'types/interface';
import { useNavigate } from 'react-router-dom';

interface Props{
    top3ListItem: BoardListItem;
}


function Top3Item({top3ListItem}:Props) {

    const {boardNumber,title,content,boardTitleImage} = top3ListItem;
    const {favoriteCount,commentCount,viewCount} = top3ListItem;
    const {writeDatetime,writerNickname,writerProfileImage} = top3ListItem;

    // 네이게이트 함수
    // const navigator = useNavigate();

    //이벤트 핸들러 게시글 아이템 클릭 이벤트 처리함수
    const onClickHandler = () =>{
        // navigator(boardNumber);
    }

  return (
    <div className='top-3-list-item' style={{backgroundImage: `url(${boardTitleImage})`}} onClick={onClickHandler}>
        <div className='top-3-list-item-main-box'>
            <div className='top-3-list-item-top'>
                <div className='top-3-list-item-profilebox'>
                    <div className="top-3-list-item-profile-image" style={{backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage})`}}>

                    </div>
                </div>
                <div className='top-3-list-item-write-box'>
                    <div className='top-3-list-item-nickname'>{writerNickname}</div>
                    <div className='top-3-list-item-write-date'>{writeDatetime}</div>
                </div>
            </div>
            <div className='top-3-list-item-middle'>
                <div className='top-3-list-item-title'>{title}</div>
                <div className='top-3-list-item-content'>{content}</div>
            </div>
            <div className='top-3-list-item-bottom'>
                <div className="top-3-list-item-counts">
                    {`댓글 ${commentCount} 좋아요 ${favoriteCount} 조회수 ${viewCount}`}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top3Item