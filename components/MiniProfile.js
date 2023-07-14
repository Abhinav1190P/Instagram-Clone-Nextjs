import React from 'react'

export default function MiniProfile() {
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img className='h-16 rounded-full border p-[2px]' src="https://media.licdn.com/dms/image/C4E03AQGiOYOVYTUwhg/profile-displayphoto-shrink_800_800/0/1647791230223?e=1693440000&v=beta&t=1vvNV5MT77-A61qO5v1gSacCNKDY73bBSXDQmJ4LQXY" alt='user' />
            <div className='flex-1 ml-4'>
                <h2 className='font-bold'>abhinav110</h2>
                <h3 className='text-sm text-gray-400'>Welcome to  instagram</h3>
            </div>
            <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
        </div>
    )
}
