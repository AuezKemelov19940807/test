'use client'
import { useRouter } from 'next/navigation'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { HiPencilAlt } from 'react-icons/hi'
import { useAppDispatch } from '../../redux/hooks'
import { fetchPostsItems } from '../../redux/features/posts/postsSlice'
const Post = ({ id, title, body }: IPostProps) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const setData = (id: string, title: string, body: string) => {
    localStorage.setItem('id', id)
    localStorage.setItem('title', title)
    localStorage.setItem('body', body)
  }

  const handleDelete = async (id: string) => {
    const data = await fetch(
      `https://654d8192cbc3253557419c01.mockapi.io/posts/${id}`,
      {
        method: 'DELETE',
      }
    )
    let user = await data.json()
    console.log(user)
    dispatch(fetchPostsItems())
  }

  return (
    <div className="pt-3">
      <div className="mb-2">
        <div className="border border-gray-200 rounded-xl p-3 max-w-xl">
          {/* title & body */}
          <div className="mb-5">
            {/* title */}
            <h3 data-testid="post-title" className="font-semibold mb-2 text-xl">
              {title}
            </h3>
            {/* body */}
            <p data-testid="post-desc">{body}</p>
          </div>
          {/* buttons */}
          <div className="flex gap-x-2">
            {/* button update */}
            <button
              data-testid="edit"
              className=""
              onClick={() => {
                setData(id, title, body)
                router.push('/updatePost')
              }}
            >
              <HiPencilAlt className="w-5 h-5" />
            </button>
            {/* button delete */}
            <button
              data-testid="delete"
              className=""
              onClick={() => {
                if (window.confirm('Are you sure delete post')) {
                  handleDelete(id)
                }
              }}
            >
              <RiDeleteBin6Line className="w-5 h-5 text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
