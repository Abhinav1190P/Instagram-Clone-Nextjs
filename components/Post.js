import React from 'react'
import {HeartIcon, ChatBubbleLeftIcon, BookmarkIcon, FaceSmileIcon} from '@heroicons/react/24/outline'
export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div className='bg-white my-7 border rounded-md'>
      <div className='flex items-center p-5'>
        <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userImg} alt={username} />
        <p  className='font-bold flex-1'>{username}</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>
      <img src={img} className='object-cover w-full' alt="Post-img"/>

      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn'/>
          <ChatBubbleLeftIcon className='btn'/>
        </div>
        <BookmarkIcon className='btn'/>
      </div>

      <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>

      <form action="" className='flex items-center p-4'>
        <FaceSmileIcon className='h-7 '/>
        <input className='border-none flex-1 focus:ring-0' type="text" placeholder='Enter your comment...'/>
        <button className='text-blue-400 font-bold'>Post</button>
      </form>

    </div>
  )
}
