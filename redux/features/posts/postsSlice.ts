//reduxjs/toolkit
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './../../store';


export const fetchPostsItems = createAsyncThunk('fetchPizzasItems', async () => {
const url = new URL('https://654d8192cbc3253557419c01.mockapi.io/posts')
   const result = await fetch(url)
   return  result.json() 
})

interface IInitialStateProps {
  posts: Post[]
  isLoading: 'loading' | 'success' | 'error'
  title: string
  body: string
}

const initialState:IInitialStateProps = {
  posts: [],
  isLoading: 'loading',
  title: '',
  body: ''
} 

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
     changedItems:(state, action) => state.posts = action.payload,
     changedTitle : (state, action) => state.title = action.payload,
     changedBody : (state, action) => state.body = action.payload
    },
    extraReducers: (builder) => {  
    builder
    .addCase(fetchPostsItems.pending, (state) => {
    state.isLoading = 'loading'
    state.posts  = [] 
   })
   .addCase(fetchPostsItems.fulfilled, (state, action:PayloadAction<Post[]>) => {
    state.isLoading = 'success'
    state.posts  = action.payload
   })
   .addCase(fetchPostsItems.rejected, (state) => {
    state.isLoading = 'error'
    state.posts  = []
  })

 }
})

export  const {changedItems, changedTitle, changedBody } = postsSlice.actions
export const selectPosts = (state: RootState ) => state.posts
export default postsSlice.reducer