interface Post {
    id:string
    title: string
    body: string
}

interface IPostProps {
    id: string
    title: string
    body: string

}

interface IPostsProps {
    posts: Post[]
}

interface FormDataProps {
    email: string
    password: string
}
  
interface IErrorsProps {
    email: string
    password: string
}
  
interface IUserProps {
    id: number
    email: string
    password: string
}
  