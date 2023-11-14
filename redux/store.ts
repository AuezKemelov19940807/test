'use client'
import { configureStore } from "@reduxjs/toolkit"
import PostsReduser from './features/posts/postsSlice'
export const store = configureStore({
    reducer: {
      posts: PostsReduser
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch