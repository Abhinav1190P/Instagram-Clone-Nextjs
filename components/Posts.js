import React from 'react'
import Post from './Post'
export default function Posts() {

    const posts = [
        {
            id: "1",
            username: "abhinav119",
            userImg:"https://media.licdn.com/dms/image/C4E03AQGiOYOVYTUwhg/profile-displayphoto-shrink_800_800/0/1647791230223?e=1693440000&v=beta&t=1vvNV5MT77-A61qO5v1gSacCNKDY73bBSXDQmJ4LQXY",
            img: "https://images.unsplash.com/photo-1688103920302-54295b22625b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            caption: "Nice picture"
        },
        {
            id: "2",
            username: "ayushmaan213",
            userImg:"https://media.licdn.com/dms/image/C4E03AQGiOYOVYTUwhg/profile-displayphoto-shrink_800_800/0/1647791230223?e=1693440000&v=beta&t=1vvNV5MT77-A61qO5v1gSacCNKDY73bBSXDQmJ4LQXY",
            img: "https://images.unsplash.com/photo-1688118109357-97c793fcd4b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            caption: "Nice picture"
        }
    ]

  return (
    <div>
         {
            posts.map(post => (
               <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />  
            ))
         }
    </div>
  )
}
