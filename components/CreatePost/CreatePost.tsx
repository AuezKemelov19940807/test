'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '../../redux/hooks'
import { fetchPostsItems } from '../../redux/features/posts/postsSlice'

import axios from 'axios'
const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    window.localStorage.setItem('title', title)
    window.localStorage.setItem('body', body)
  }, [title, body])

  const addPost = async () => {
    axios.post(`https://654d8192cbc3253557419c01.mockapi.io/posts`, {
      title,
      body,
    })
    dispatch(fetchPostsItems())
  }

  return (
    <div className="items-start mb-2">
      <div>
        <div className="w-full">
          <textarea
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block box-border w-full md:w-[500px] h-[120px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
          />
        </div>
        <div className="m-full">
          <textarea
            placeholder="description"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="block h-[200px] md:h-[500px] w-full md:w-[500px] box-border  p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex gap-x-2 mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            addPost()
            router.push('/')
          }}
        >
          Add Post
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default CreatePost
