'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '../../redux/hooks'
import { fetchPostsItems } from '../../redux/features/posts/postsSlice'
import axios from 'axios'

const UpdatePost = () => {
  const [id, setID] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('id') || '')
      if (data) {
        setID(data)
      }
    } catch (err) {
      console.log(err)
    }

    setTitle(localStorage.getItem('title') || '')
    setBody(localStorage.getItem('body') || '')
  }, [])

  const router = useRouter()
  const updatePost = async () => {
    axios.put(`https://654d8192cbc3253557419c01.mockapi.io/posts/${id}`, {
      title,
      body,
    })
    dispatch(fetchPostsItems())
  }

  return (
    <div className="mb-2">
      <div>
        <textarea
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block box-border w-full md:w-[500px] h-[120px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
        />
        <textarea
          placeholder="description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="block box-border h-[200px]  md:h-[500px] w-full md:w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex gap-x-3 mt-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            updatePost()
            router.push('/')
          }}
        >
          Update Post
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

export default UpdatePost
