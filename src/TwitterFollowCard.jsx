import { useState } from "react";


export function TwitterFollowCard( { formatUserName, userName,children}) {
    

    const [isFollowing,setIsFollowing]=useState(false);
    const handleClick = () =>{
      setIsFollowing(!isFollowing);
    }


    const imageSrc =`https://unavatar.io/${userName}`;
    const text= isFollowing ? 'Siguiendo': 'Seguir';
    const btnclass= isFollowing ?
    'tw-card-bfollow isFollowing': 
    'tw-card-bfollow ';
return (
    <article className='tw-card'>
    <header className='tw-card-header'>
      <img
      className='tw-card-img'
      alt="avatar" 
      src={imageSrc} 
      />
      <div className='tw-card-info'>
        <strong>{children}</strong>
        <span className='tw-card-at'>{formatUserName(userName)}</span>
      </div>
    </header>
    <aside>
      <button className={btnclass} onClick={handleClick}>
        {text}
      </button>
    </aside>
  </article>
)
}


//export function TwitterFollowCard( { formatUserName, userName,name,isFollowing}) {
  //antes se usaba name en lugar de children
