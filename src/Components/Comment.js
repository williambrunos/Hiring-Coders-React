import React from 'react';
import UserInfo from './UserInfo';

export default function Comment(props) {
  return(
    <>
      <div id="user-comment">
        <UserInfo name={ props.user.name } avatarUrl={ props.user.avatarUrl }/>
        <div id="comment">
          <p>{ props.user.comment }</p>
        </div>
      </div>
    </>
  );
}