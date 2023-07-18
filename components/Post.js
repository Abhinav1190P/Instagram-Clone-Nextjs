import React, { useEffect, useState } from "react";
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { addDoc, doc, collection, onSnapshot, orderBy, serverTimestamp, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { query } from "firebase/firestore";
import Moment from "react-moment";

export default function Post({ img, userImg, caption, username, id }) {

  const { data: session } = useSession()
  const [comment, SetComment] = useState('')
  const [comments, SetComments] = useState([])
  const [hasLiked, setHasLiked] = useState(false)
  const [likes, setLikes] = useState([])

  useEffect(() => {

    const ubsubscribe = onSnapshot(
      query(collection(db, "posts", id, "comments"), orderBy('timestamp', 'desc')), (snapshot) => { SetComments(snapshot.docs) }
    )
    return ubsubscribe
  }, [db, id])

  const sendComment = async (event) => {
    event.preventDefault();
    const commentToSend = comment;
    SetComment("")

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp()
    });

  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts', id, "likes"), (snapshot) => {
        setLikes(snapshot.docs)
      }
    )

  }, [db])


  useEffect(() => {
    setHasLiked(
      likes.findIndex(like => like.id === session?.user?.uid) !== -1
    )
  }, [likes])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid))
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user.uid), {
        username: session?.user?.username
      })
    }

  }

  return (
    <div className="bg-white my-7 border rounded-md">

      <div className="flex items-center p-5">
        <img className="h-12 rounded-full object-cover border p-1 mr-3" src={userImg} alt={username} />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />

      </div>


      <img className="object-cover w-full" src={img} alt="" />

      {
        session && (<div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {
              hasLiked ?
                (<HeartIconFilled onClick={likePost} className="text-red-400 btn" />)
                : (<HeartIcon onClick={likePost} className="btn" />)
            }
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>)
      }


      <p className="p-5 truncate"><span className="font-bold mr-2">
        {username}</span>
        {caption}
      </p>
      {
        comments.length > 0 && (
          <div className="mx-10 max-h-24 overflow-y-scroll scrollbar">
            {comments.map(comment => (
              <div className="flex items-center space-x-2 mb-2">
                <img className="h-7 rounded-full object-cover" alt="user-image" src={comment.data().userImage} />
                <p className="font-semibold">{comment.data().username}</p>
                <p className="flex-1 truncate">{comment.data().comment}</p>
                <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
              </div>
            ))}</div>
        )
      }
      {
        session && (
          <form className="flex items-center p-4">
            <EmojiHappyIcon className="h-7" />
            <input
              value={comment}
              onChange={(e) => SetComment(e.target.value)}
              className="border-none flex-1 focus:ring-0" type="text" placeholder="Enter your comment..." />
            <button
              type="submit"
              onClick={sendComment}
              disabled={!comment.trim()} className="text-blue-400 font-bold disabled:text-blue-200">Post</button>
          </form>
        )
      }


    </div>
  );
}
