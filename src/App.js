import { React, useState } from 'react';
import Comment from './Components/Comment';

export default function App(props) {
  const user = {
            name: "William", 
            avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fos-cavaleiros-de-ouro.fandom.com%2Fpt-br%2Fwiki%2FCamus_de_aqu%25C3%25A1rio&psig=AOvVaw0PFuNaxoBrsOxGwlFcq3DF&ust=1626899668958000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPC589i_8vECFQAAAAAdAAAAABAD",
            comment: "Este é Camus de Aquário",
  };
  return (
    <>  
      <Comment user={user}/>
    </>
  );
}
