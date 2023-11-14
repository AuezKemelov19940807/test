//components
import Post from '../Post/Post'

const Posts = ({ posts }: IPostsProps) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </div>
  )
}

export default Posts
