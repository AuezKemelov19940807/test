'use client'
import Posts from '../Posts/Posts'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchPostsItems } from '../../redux/features/posts/postsSlice'

export default function News() {
  const dispatch = useAppDispatch()
  // const { posts, isLoading } = useAppSelector((state) => state.posts)
  const posts = useAppSelector((state) => state.posts.posts)
  const isLoading = useAppSelector((state) => state.posts.isLoading)
  useEffect(() => {
    dispatch(fetchPostsItems())
  }, [dispatch])

  const router = useRouter()

  return (
    <main className="container mx-auto py-5">
      <div className="">
        <h1 className="text-2xl font-bold mb-5">News Page</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push('/addPost')}
        >
          Add Post
        </button>
      </div>
      {isLoading === 'loading' ? (
        <div data-testid="loading" className="py-5">
          Loading...
        </div>
      ) : (
        <Posts posts={posts} />
      )}
    </main>
  )
}
