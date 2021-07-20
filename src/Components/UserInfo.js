import React from 'react';
import Avatar from './Avatar';

export default function UserInfo(props) {
  return(
    <>
      <div id="user-info">
        <Avatar name={ props.name } avatarUrl={ props.avatarUrl }/>
        <div id="user-info-name">
          <p>{ props.name }</p>
        </div>
      </div>
    </>
  );
}